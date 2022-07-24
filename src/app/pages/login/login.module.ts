import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [LoginComponent],
	exports: [LoginComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatInputModule,
		RouterModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatIconModule,
	],
})
export class LoginModule {}
