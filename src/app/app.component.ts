import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import packageJson from '../../package.json';
import { Card, CardListResponse, ProcessedSet, Set, SetListResponse } from './shared/models';
import { CardTable } from './shared/models/card-table.model';
import { CardFilteringService, DialogService } from './shared/services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public appVersion = packageJson.version;

	public cardListForTable: CardTable[] = [];
	public cardExtrasForTable: CardTable[] = [];
	public setList: ProcessedSet[] = [];
	
	public loading = false;
	public showExtras = false;
	
	private cardListFromRequest: Card[] = [];
	private processedCardList: CardTable[] = [];
	private setInTable: ProcessedSet | undefined;
	private loadingDialog: any;

	constructor(private cardService: CardFilteringService,
				private dialog: DialogService) { }

	ngOnInit() {
		this.cardService.requestSetList().subscribe((setList: SetListResponse) => {
			this.setList = this.cardService.createSetList(setList.data);
		});
	}
	
	public selectSetCards(event: string): void {
		this.cleanArrays();
		this.loading = true
		this.loadingDialog = this.dialog.openLoadingDialog();
		this.setInTable = this.setList.find(set => set.set_name === event);
		this.cardService.getSet(this.setInTable?.set_abreviation).pipe(delay(500)).subscribe((response: Set)=>{
			if (this.setInTable) {
				this.setInTable.set_print_size = response.printed_size;
			}
			this.loopCardPages(response.search_uri);
		});
		
	}

	public dataCopy(): string {
		return JSON.stringify(this.cardListForTable);
	}
	private cleanArrays(): void {
		this.cardListFromRequest = [];
		this.cardListForTable = [];
		this.processedCardList = [];
		this.cardExtrasForTable = [];
	}

	private loopCardPages(searchQuery: string | undefined): void {
		this.cardService.getCardListFromSet(searchQuery).pipe(delay(500)).subscribe((setList: CardListResponse) => {
			this.cardListFromRequest = this.cardListFromRequest.concat(setList.data);
			if (setList.has_more) {
				this.loopCardPages(setList.next_page);
			} else {
				this.handleSetPrintSize();
				this.cardListFromRequest.filter((card: Card)=>{
					this.processedCardList.push({
							count: 0,
							tradelist_count: 0,
							name: card.name,
							edition: card.set,
							condition: 'Near Mint',
							language: 'English',
							foil: '',
							tags: '',
							last_modified: '00:00.0',
							collector_number: card.collector_number ? card.collector_number : '',
						}
					);
				});
				const lastCardInSetIndex = this.processedCardList.findIndex(card => card.collector_number && +card.collector_number === this.setInTable?.set_print_size);
				this.cardListForTable = this.processedCardList.slice(0, lastCardInSetIndex + 1);
				this.cardExtrasForTable = this.processedCardList.slice(lastCardInSetIndex + 1, this.processedCardList.length);
				this.loading = false;
				this.dialog.closeLoadingDialog(this.loadingDialog);
			}
		});
	}

	private handleSetPrintSize() {
		if (!this.setInTable?.set_print_size) {
			const setForests:Card[] = this.cardListFromRequest.filter((card: Card) => card.name === "Forest" && card.type_line === "Basic Land — Forest");
			const lastForest: Card = setForests[setForests.length - 1];
			if (this.setInTable && lastForest) {
				this.setInTable.set_print_size = +lastForest.collector_number;
			}
		}
	}

}
