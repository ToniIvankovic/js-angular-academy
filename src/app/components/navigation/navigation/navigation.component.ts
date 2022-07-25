import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	@Output() public linkClicked = new EventEmitter();

	private readonly menusTopLoggedIn = [
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
	private readonly menusBottomLoggedIn = [
		{
			title: 'Log out',
			url: '/logout',
		},
	];
	private readonly menusTopPublic = [
		{
			title: 'All shows',
			url: '/',
		},
		{
			title: 'Top-rated',
			url: '/top-rated',
		},
	];
	private readonly menusBottomPublic = [
		{
			title: 'Login',
			url: '/login',
		},
	];

	public menusTop;
	public menusBottom;

	constructor(private readonly router: Router, private readonly authService: AuthService) {
		if (this.authService.getCurrentUser()) {
			this.menusTop = this.menusTopLoggedIn;
			this.menusBottom = this.menusBottomLoggedIn;
		} else {
			this.menusTop = this.menusTopPublic;
			this.menusBottom = this.menusBottomPublic;
		}
	}

	public onClick() {
		this.linkClicked.emit();
	}
}
