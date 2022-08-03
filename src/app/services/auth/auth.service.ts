import { Injectable } from '@angular/core';
import { IAuthRegisterUser } from './auth-register-user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
	public getCurrentUser(): IUser | undefined {
		//TODO
		// return undefined;
		return {
			email: 'example@example.com',
			image_url:
				'https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock?fit=fill&w=480&h=270',
			id: '',
		};
	}
}
