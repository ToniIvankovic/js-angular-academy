import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	constructor(private readonly router: Router) {}

	public readonly menus = [
		{
			title: 'All shows',
			url: '/',
		},
		{
			title: 'Top-rated shows',
			url: '/top-rated',
		},
	];

	public id: string = '';
	public findById() {
		console.log(this.id);
	}
}
