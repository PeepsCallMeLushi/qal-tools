import { Component } from '@angular/core';
import { Router } from '@angular/router';
import packageJson from '../../package.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private router: Router) {
		this.router.navigate(['mtg-tool']);
	}

	public appVersion = packageJson.version;

}
