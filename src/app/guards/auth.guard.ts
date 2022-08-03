import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private readonly authService: AuthService, private readonly router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authService.getCurrentUser().pipe(
			map((user: IUser | undefined) => {
				if (user) {
					return true;
				}
				return this.router.createUrlTree(['/login']);
			}),
		);
	}
}
