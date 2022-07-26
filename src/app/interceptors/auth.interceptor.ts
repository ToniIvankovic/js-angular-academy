import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const headers = new HttpHeaders({
			'access-token': localStorage.getItem('access-token') || '',
			client: localStorage.getItem('client') || '',
			uid: localStorage.getItem('uid') || '',
		});
		return next.handle(
			request.clone({
				headers,
			}),
		);
	}
}
