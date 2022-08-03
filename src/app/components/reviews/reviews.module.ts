import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { SingleReviewModule } from '../single-review/single-review.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ReviewsComponent],
	imports: [CommonModule, SingleReviewModule, FormsModule, MatIconModule, MatButtonModule],
	exports: [ReviewsComponent],
})
export class ReviewsModule {}
