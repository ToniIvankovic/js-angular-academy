import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(private readonly authService: AuthService, private readonly router: Router) {
		this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(8)]),
		});
	}

	public imgSrc = '../../../assets/logo.svg';
	public form: FormGroup;

	public get emailErrors() {
		return this.form.controls['email'].errors;
	}

	public get passwordErrors() {
		return this.form.controls['password'].errors;
	}

	public onLoginClick(event: Event) {
		event.preventDefault();

		if (this.form.invalid) {
			return;
		}

		this.authService
			.login({
				email: this.form.controls['email'].value,
				password: this.form.controls['password'].value,
			})
			.pipe(catchError(this.handleErrorResponse.bind(this)))
			.subscribe((user) => {
				console.log(user);
				this.router.navigate(['/']);
			});
	}

	private invalidCredentials: boolean = false;
	public inputChanged() {
		if (this.invalidCredentials) {
			this.form.controls['email'].setErrors(null);
			this.form.controls['password'].setErrors(null);
			this.invalidCredentials = false;
		}
	}

	private handleErrorResponse(error: HttpErrorResponse) {
		console.log(error.error.errors);
		this.invalidCredentials = true;
		this.form.controls['email'].setErrors({
			credentials: 'Incorrect credentials',
		});
		this.form.controls['password'].setErrors({
			credentials: 'Incorrect credentials',
		});
		console.log(this.form.controls['password'].errors);
		return EMPTY;
	}
}
