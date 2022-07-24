import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleReviewComponent } from './single-review.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [SingleReviewComponent],
	imports: [CommonModule, MatIconModule],
	exports: [SingleReviewComponent],
})
export class SingleReviewModule {}
