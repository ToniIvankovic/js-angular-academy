import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ShowCardComponent],
	imports: [CommonModule, MatCardModule],
	exports: [ShowCardComponent],
})
export class ShowCardModule {}
