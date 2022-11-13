import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionButton } from './shared/models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public actions: ActionButton[] = [
		{
			icon: 'checklist',
			action: () => {
				this.router.navigate(['mtg', 'set-list']);
			},
			tooltip: 'Go to MTG Collection List',
		},
		{
			icon: 'calculate',
			action: () => {
				this.router.navigate(['nikke', 'data-set-calculator'])
			},
			tooltip: 'Go to Nikke\'s Data Calculator',
		}
	];

	constructor(private router: Router) {
		this.router.navigate(['mtg','set-list']);
	}

}
