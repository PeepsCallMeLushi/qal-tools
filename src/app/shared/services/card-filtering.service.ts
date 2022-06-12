import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card, Set, SetListResponse } from '../models';
import { ProcessedSet } from '../models/processed-set.model';

@Injectable({
	providedIn: 'root'
})
export class CardFilteringService {

	private readonly scryFallApi: string = 'https://api.scryfall.com';

	constructor(private http: HttpClient) {
	}

	public createSetList(setList: Set[]): ProcessedSet[] {
		const processedSet: ProcessedSet[] = [];
		setList.forEach((set: Set) => {
			processedSet.push(
				{
					set_abreviation: set.code,
					set_name: set.name
				});
		});
		return processedSet.sort((a: ProcessedSet, b: ProcessedSet) => {
			return a.set_name > b.set_name ? 1 : -1;
		});
	}

	public getSet(setCode: string | undefined): Observable<Set> {
		return this.http.get<Set>(`${this.scryFallApi}/sets/${setCode || ''}`);
	}

	public getCardListFromSet(setSearch: string | undefined): Observable<any> {
		return this.http.get<SetListResponse>(setSearch || '');
	}

	public requestSetList(): Observable<SetListResponse> {
		return this.http.get<SetListResponse>(`${this.scryFallApi}/sets`);
	}

	public getSetList(): string[] {
		return [];
	}
}
