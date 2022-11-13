import { Component } from '@angular/core';
import { Router } from '@angular/router';
import packageJson from '../../package.json';
import { ActionButton } from './shared/models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	public appVersion = packageJson.version;

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
				this.router.navigate(['nikke'])
			},
			tooltip: 'Go to Nikke\'s Data Calculator',
		}
	];

	constructor(private router: Router) {
		this.router.navigate(['mtg','set-list']);
	}

}
