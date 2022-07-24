import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	constructor(private readonly authService: AuthService, private readonly router: Router) {
		this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(8)]),
			password2: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
	public get password2Errors() {
		return this.form.controls['password2'].errors;
	}

	public onSignUpClick(event: Event) {
		event.preventDefault();

		if (this.form.invalid) {
			return;
		}

		this.authService
			.register({
				email: this.form.controls['email'].value,
				password: this.form.controls['password'].value,
				password_confirmation: this.form.controls['password2'].value,
			})
			.pipe(catchError(this.handleErrorResponse.bind(this)))
			.subscribe((user) => {
				console.log(user);
				this.router.navigate(['/']);
			});
	}

	public passBlur() {
		if (this.form.controls['password'].value !== this.form.controls['password2'].value) {
			this.form.controls['password2'].setErrors({
				match: "Passwords don't match",
			});
		}
	}

	public inputChanged() {
		this.form.controls['password2'].setErrors(null);
	}

	private handleErrorResponse(error: HttpErrorResponse) {
		console.log(error.error.errors);
		this.form.controls['email'].setErrors({
			existing: true,
		});
		return EMPTY;
	}
}
