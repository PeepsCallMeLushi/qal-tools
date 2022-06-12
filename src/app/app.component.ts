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

	public searchFormControl = new FormControl('');
	public filterList: Observable<ProcessedSet[]>;
	public cardListForTable: CardTable[] = []
	public displayedColumns: string[] = [
		'count',
		'tradelist_count',
		'name',
		'edition',
		'condition',
		'language',
		'foil',
		'tags',
		'last_modified',
		'collector_number'
	];
	
	public loading = false;
	
	private cardListFromRequest: Card[] = [];
	private setList: ProcessedSet[] = [];
	private setInTable: ProcessedSet | undefined;

	constructor(private cardService: CardFilteringService) {
		this.filterList = this.searchFormControl.valueChanges.pipe(
			startWith(''),
			map((value) => this.filterOptions(value || '')));
	}

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
	private cleanArrays(): void {
		this.cardListFromRequest = [];
		this.cardListForTable = [];
	}

	private loopCardPages(searchQuery: string | undefined): void {
		this.cardService.getCardListFromSet(searchQuery).pipe(delay(100)).subscribe((setList: CardListResponse) => {
			this.cardListFromRequest = this.cardListFromRequest.concat(setList.data);
			if (setList.has_more && +this.cardListFromRequest[this.cardListFromRequest.length -1].collector_number <= (this.setInTable?.set_print_size || 0)) {
				this.loopCardPages(setList.next_page);
			} else {
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

	private filterOptions(value: string): ProcessedSet[] {
		return this.setList.filter(set => 
			set.set_name.toLowerCase().includes(value.toLowerCase())
			|| set.set_abreviation.toLowerCase().includes(value.toLowerCase())
		);
	}

}
