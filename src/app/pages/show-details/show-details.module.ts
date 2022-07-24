import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsComponent } from './show-details.component';
import { RatingModule } from 'src/app/components/rating/rating.module';
import { ReviewsModule } from 'src/app/components/reviews/reviews.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ShowDetailsComponent],
	imports: [CommonModule, RatingModule, ReviewsModule, MatCardModule],
})
export class ShowDetailsModule {}
