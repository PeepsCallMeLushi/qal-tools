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
			icon: 'arrow_upward',
			action: () => {
				window.scrollTo(0,0);
			},
			tooltip: 'Back to top',
		},
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
		},
		{
			icon: 'account_circle',
			action: () => {
				this.router.navigate(['lol', 'player-team-randomizer'])
			},
			tooltip: 'Go to a League of Legends player team randomizer',
		},
	];

	constructor(private router: Router) {}

}
