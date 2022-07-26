import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, firstValueFrom, tap } from 'rxjs';
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
		this.menusTop = this.menusTopPublic;
		this.menusBottom = this.menusBottomPublic;
		firstValueFrom(this.authService.getCurrentUser()).then((user) => {
			if (user) {
				this.menusTop = this.menusTopLoggedIn;
				this.menusBottom = this.menusBottomLoggedIn;
			}
		});

		// this.authService.getCurrentUser()
		// .pipe(
		// 	tap(user => {
		// 		console.log("AAA");
		// 		if (user) {
		// 			this.setMenusLoggedIn();
		// 		}
		// 		else{
		// 			this.setMenusPublic();
		// 		}
		// 	})
		// ).subscribe();
	}

	public onClick() {
		this.linkClicked.emit();
	}
}
