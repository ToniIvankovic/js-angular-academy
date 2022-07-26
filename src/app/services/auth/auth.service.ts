import { Injectable } from '@angular/core';
import { IAuthRegisterUser } from './auth-register-user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, EMPTY, map, Observable, of, tap } from 'rxjs';
import { IUser } from './user.interface';
import { IAuthLoginUser } from './auth-login-user';

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
					localStorage.setItem('acces-token', response.headers.get('access-token') || '');
					localStorage.setItem('client', response.headers.get('client') || '');
					localStorage.setItem('uid', response.headers.get('uid') || '');
				}),
				map((response) => {
					return response.body['user'];
				}),
			);
	}

	public getCurrentUser(): Observable<IUser | null> {
		return this.http.get<IUser>('https://tv-shows.infinum.academy/users/me').pipe(
			catchError(() => {
				return of(null);
			}),
		);
	}
}
