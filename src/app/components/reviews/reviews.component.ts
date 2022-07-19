import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';
import { Review } from 'src/app/services/review/review.model';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
	public readonly greyStarPath = '../../../assets/greyStar.png';
	public readonly yellowStarPath = '../../../assets/yellowStar.png';
	public numberOfStars = 0;
	private reviewStarsField: HTMLElement | null = null;
	public reviewText: string = '';

	@Input() reviews: Array<Review> = [];
	@Input() showId: string = '';
	@Output() newReview = new EventEmitter<Review>();
	@Output() deleteReview = new EventEmitter<Review>();

	ngOnInit(): void {
		this.reviewStarsField = document.querySelector('#stars');
	}

	public onDeleteReview(review: Review) {
		this.deleteReview.emit(review);
	}

	public onButtonClick(event: Event) {
		const newReview = new Review({
			comment: this.reviewText,
			rating: this.numberOfStars,
			showId: this.showId,
			uuid: this.generateNextId(),
		});
		this.newReview.emit(newReview);

		this.reviewText = '';
		this.numberOfStars = 0;
		this.starLeave();
	}

	private generateNextId(): string {
		return `${parseInt(this.reviews[this.reviews.length - 1]?.uuid || '0') + 1}`;
	}
	public starHover(starIndex: number): void {
		if (!this.reviewStarsField) {
			return;
		}
		let newCounter = 1;
		for (let otherStar of this.reviewStarsField.children) {
			if (newCounter > starIndex) {
				otherStar.setAttribute('src', this.greyStarPath);
			} else {
				otherStar.setAttribute('src', this.yellowStarPath);
			}
			newCounter++;
		}
	}

	public starLeave(): void {
		if (!this.reviewStarsField) {
			return;
		}
		let starIndex = 1;
		for (let star of this.reviewStarsField.children) {
			if (this.numberOfStars === 0 || starIndex > this.numberOfStars) {
				star.setAttribute('src', this.greyStarPath);
			} else {
				star.setAttribute('src', this.yellowStarPath);
			}
			starIndex++;
		}
	}
}
