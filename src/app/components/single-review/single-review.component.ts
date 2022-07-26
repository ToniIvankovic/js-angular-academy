import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
	selector: 'app-single-review',
	templateUrl: './single-review.component.html',
	styleUrls: ['./single-review.component.scss'],
})
export class SingleReviewComponent {
	@Input() review?: Review;
	@Input() currentUser?: IUser;
	@Output() deletedReview = new EventEmitter<Review>();

	public readonly greyStarPath = '../../../assets/greyStar.png';
	public readonly yellowStarPath = '../../../assets/yellowStar.png';
	public readonly deleteIconPath = '../../../assets/delete.png';

	constructor(private readonly reviewService: ReviewService) {}

	public range(i: number) {
		const retVal = [];
		for (let j = 0; j < i; j++) {
			retVal.push(j);
		}
		return retVal;
	}

	public onDeleteButtonClick(event: Event) {
		if (this.review) {
			this.reviewService.deleteReview(this.review);
			this.deletedReview.emit(this.review);
		}
	}
}
