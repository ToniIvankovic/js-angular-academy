import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor() {
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

	public get formDirty() {
		return this.form.controls['email'].dirty && this.form.controls['password'].dirty;
	}

	public errors: string[] = [];

	public onLoginClick(event: Event) {
		this.errors = [];
		event.preventDefault();

		if (this.emailErrors || this.passwordErrors) {
			// this.errors = of(["A"]).pipe(delay(500));
			this.errors = [];
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
			console.log(this.emailErrors);
			console.log(this.passwordErrors);
			console.log(!!this.errors);
			console.log(this.errors);
			return;
		}

		//TODO acutal login
	}
}
