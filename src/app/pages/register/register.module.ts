import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [RegisterComponent],
	exports: [RegisterComponent],
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
export class RegisterModule {}
