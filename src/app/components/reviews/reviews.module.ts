import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { SingleReviewModule } from '../single-review/single-review.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ReviewsComponent],
	imports: [CommonModule, SingleReviewModule, FormsModule],
	exports: [ReviewsComponent],
})
export class ReviewsModule {}
