import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	constructor(private readonly router: Router) {}

	public readonly imgSrc = '../../../../assets/logo.svg';
	public readonly menusTop = [
		{
			title: 'All shows',
			url: '/',
		},
		{
			title: 'Top-rated',
			url: '/top-rated',
		},
		{
			title: 'My profile',
			url: '/profile',
		},
	];
	public readonly menusBottom = [
		{
			title: 'Log out',
			url: '/logout',
		},
	];

	public id: string = '';
	public findById() {
		console.log(this.id);
	}
}
