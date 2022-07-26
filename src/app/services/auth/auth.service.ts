import { Injectable } from '@angular/core';
import { IAuthRegisterUser } from './auth-register-user';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, Observable, of } from 'rxjs';
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
		return this.http.post<IUser>('https://tv-shows.infinum.academy/users/sign_in', formData);
	}
	public getCurrentUser(): Observable<IUser | null> {
		return this.http.get<IUser>('https://tv-shows.infinum.academy/users/me').pipe(
			catchError(() => {
				return of(null);
			}),
		);
	}
}
