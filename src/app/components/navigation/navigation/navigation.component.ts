import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	@Output() public linkClicked = new EventEmitter();
	constructor(private readonly router: Router) {}

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

	public onClick() {
		this.linkClicked.emit();
	}
}
