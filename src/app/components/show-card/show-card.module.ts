import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card.component';
import { MatCardModule } from '@angular/material/card';
import { RatingModule } from '../rating/rating.module';
import { CapitalizeModule } from 'src/app/pipes/capitalize/capitalize.module';

@NgModule({
	declarations: [ShowCardComponent],
	imports: [CommonModule, MatCardModule, RatingModule, CapitalizeModule],
	exports: [ShowCardComponent],
})
export class ShowCardModule {}
