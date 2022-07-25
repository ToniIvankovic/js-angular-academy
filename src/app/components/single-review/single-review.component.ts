import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';

@Component({
	selector: 'app-single-review',
	templateUrl: './single-review.component.html',
	styleUrls: ['./single-review.component.scss'],
})
export class SingleReviewComponent {
	@Input() review: Review | null = null;
	@Output() reviewDelete = new EventEmitter<Review>();
	public readonly greyStarPath = '../../../assets/greyStar.png';
	public readonly yellowStarPath = '../../../assets/yellowStar.png';
	public readonly deleteIconPath = '../../../assets/delete.png';
	constructor() {}

	public range(i: number) {
		const retVal = [];
		for (let j = 0; j < i; j++) {
			retVal.push(j);
		}
		return retVal;
	}

	public onDeleteButtonClick(event: Event) {
		if (this.review) {
			this.reviewDelete!.emit(this.review);
		}
	}
}
