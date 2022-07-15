import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsComponent } from './show-details.component';
import { RatingModule } from 'src/app/components/rating/rating.module';
import { ReviewsModule } from 'src/app/components/reviews/reviews.module';

@NgModule({
	declarations: [ShowDetailsComponent],
	imports: [CommonModule, RatingModule, ReviewsModule],
})
export class ShowDetailsModule {}
