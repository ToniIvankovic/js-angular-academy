import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';

@Component({
	selector: 'app-single-review',
	templateUrl: './single-review.component.html',
	styleUrls: ['./single-review.component.scss'],
})
export class SingleReviewComponent {
	@Input() review: Review | null = null;

	constructor() {}
}
