import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { delay, map, Observable, startWith } from 'rxjs';
import { Card, CardListResponse, ProcessedSet, Set, SetListResponse } from './shared/models';
import { CardTable } from './shared/models/card-table.model';
import { CardFilteringService } from './shared/services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public cardListForTable: CardTable[] = []
	public setList: ProcessedSet[] = [];
	
	public loading = false;
	
	private cardListFromRequest: Card[] = [];
	private setInTable: ProcessedSet | undefined;

	constructor(private cardService: CardFilteringService) { }

	ngOnInit() {
		this.cardService.requestSetList().subscribe((setList: SetListResponse) => {
			this.setList = this.cardService.createSetList(setList.data);
		});
	}
	
	public selectSetCards(event: string): void {
		this.cleanArrays();
		this.loading = true
		this.setInTable = this.setList.find(set => set.set_name === event);
		this.cardService.getSet(this.setInTable?.set_abreviation).pipe(delay(100)).subscribe((response: Set)=>{
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
	}

	private loopCardPages(searchQuery: string | undefined): void {
		this.cardService.getCardListFromSet(searchQuery).pipe(delay(100)).subscribe((setList: CardListResponse) => {
			this.cardListFromRequest = this.cardListFromRequest.concat(setList.data);
			if (setList.has_more) {
				this.loopCardPages(setList.next_page);
			} else {
				this.handleSetPrintSize();
				this.cardListFromRequest.filter((card: Card)=>{
					if (this.setInTable?.set_print_size && +card.collector_number <= this.setInTable?.set_print_size) {
						this.cardListForTable.push({
							count: 0,
							tradelist_count: 0,
							name: card.name,
							edition: card.set,
							condition: 'Near Mint',
							language: 'English',
							foil: '',
							tags: '',
							last_modified: '00:00.0',
							collector_number: card.collector_number,
						}
					);
				}})
				console.log(this.cardListForTable);
				this.loading = false;
			}
		});
	}

	private handleSetPrintSize() {
		if (!this.setInTable?.set_print_size) {
			const setForests:Card[] = this.cardListFromRequest.filter((card: Card) => card.name === "Forest" && card.type_line === "Basic Land — Forest");
			const lastForest: Card = setForests[setForests.length - 1];
			if (this.setInTable) {
				this.setInTable.set_print_size = +lastForest.collector_number;
			}
		}
	}

}
