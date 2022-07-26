import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, firstValueFrom, tap } from 'rxjs';
import { INavigationMenu } from 'src/app/interfaces/navigation-menu.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
	@Output() public linkClicked = new EventEmitter();

	private readonly menusTopLoggedIn: INavigationMenu[] = [
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
	private readonly menusBottomLoggedIn: INavigationMenu[] = [
		{
			title: 'Log out',
			sideEffect: () => {
				this.authService.logout();
				this.router.navigateByUrl('/login');
			},
		},
	];
	private readonly menusTopPublic: INavigationMenu[] = [
		{
			title: 'All shows',
			url: '/',
		},
		{
			title: 'Top-rated',
			url: '/top-rated',
		},
	];
	private readonly menusBottomPublic: INavigationMenu[] = [
		{
			title: 'Login',
			url: '/login',
		},
	];

	public menusTop: INavigationMenu[];
	public menusBottom: INavigationMenu[];

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

	public onClick(menu: { title: string; url?: string; sideEffect?: () => void }) {
		if (menu.sideEffect) {
			menu.sideEffect();
		}
		this.linkClicked.emit();
	}
}
