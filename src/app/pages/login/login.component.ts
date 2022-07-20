import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

	public form: FormGroup;

	public get emailErrors() {
		return this.form.controls['email'].errors;
	}

	public get passwordErrors() {
		return this.form.controls['password'].errors;
	}

	public errors: string[] = [];

	public onLoginClick(event: Event) {
		this.errors = [];
		event.preventDefault();

		this.checkForErrors();
		if (this.errors.length !== 0) {
			return;
		}

		this.authService
			.login({
				email: this.form.controls['email'].value,
				password: this.form.controls['password'].value,
			})
			.subscribe((user) => {
				//Add error handling
				console.log(user);
				this.router.navigate(['/']);
			});
	}

	private checkForErrors() {
		if (this.emailErrors || this.passwordErrors) {
			// this.errors = of(["A"]).pipe(delay(500));
			if (this.emailErrors) {
				if (this.emailErrors['email']) {
					this.errors.push('Invalid email address format');
				} else if (this.emailErrors['required']) {
					this.errors.push('Email address required');
				} else {
					this.errors.push('Email address problem');
				}
			}
			if (this.passwordErrors) {
				if (this.passwordErrors['minlength']) {
					this.errors.push('Password is too short - minimum length is 8 characters');
				} else if (this.passwordErrors['required']) {
					this.errors.push('Password is required');
				} else {
					this.errors.push('Password problem');
				}
			}
		}
	}
}
