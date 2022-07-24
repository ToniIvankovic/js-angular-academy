import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProfileComponent],
	exports: [ProfileComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class ProfileModule {}
