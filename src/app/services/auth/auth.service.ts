import { Injectable } from '@angular/core';
import { IAuthRegisterUser } from '../../interfaces/auth-register-user.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, EMPTY, map, Observable, of, tap } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { IAuthLoginUser } from 'src/app/interfaces/auth-login-user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly http: HttpClient) {}

	public register(formData: IAuthRegisterUser): Observable<IUser> {
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users', formData);
	}
	public login(formData: IAuthLoginUser): Observable<IUser> {
		return this.http
			.post<any>('https://tv-shows.infinum.academy/users/sign_in', formData, { observe: 'response' })
			.pipe(
				tap((response) => {
					localStorage.setItem('access-token', response.headers.get('access-token') || '');
					localStorage.setItem('client', response.headers.get('client') || '');
					localStorage.setItem('uid', response.headers.get('uid') || '');
				}),
				map((response) => {
					return response.body['user'];
				}),
			);
	}

	public getCurrentUser(): Observable<IUser | null> {
		return this.http.get<any>('https://tv-shows.infinum.academy/users/me').pipe(
			map((user) => user?.user),
			catchError(() => {
				return of(null);
			}),
		);
	}

	public logout(): void {
		localStorage.removeItem('access-token');
		localStorage.removeItem('client');
		localStorage.removeItem('uid');
	}
}
