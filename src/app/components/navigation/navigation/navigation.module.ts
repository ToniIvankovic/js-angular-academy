import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [NavigationComponent],
	imports: [CommonModule, MatButtonModule, MatInputModule, FormsModule, RouterModule],
	exports: [NavigationComponent],
})
export class NavigationModule {}
