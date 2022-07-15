import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsComponent } from './show-details.component';
import { RatingModule } from 'src/app/components/rating/rating.module';

@NgModule({
	declarations: [ShowDetailsComponent],
	imports: [CommonModule, RatingModule],
})
export class ShowDetailsModule {}
