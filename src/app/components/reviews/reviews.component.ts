import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';
import { IUser } from 'src/app/services/auth/user.interface';
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
		if (this.numberOfStars === 0) {
			return;
		}
		const newReview = new Review({
			comment: this.reviewText,
			rating: this.numberOfStars,
			showId: this.showId,
			id: this.generateNextId(),
			user: this.getActiveUser(),
		});
		this.newReview.emit(newReview);

		this.reviewText = '';
		this.numberOfStars = 0;
		this.starLeave();
	}

	private getActiveUser(): IUser {
		//TODO
		return {
			email: 'example@example.com',
			image_url: '',
			id: '',
		};
	}
	private generateNextId(): string {
		return `${parseInt(this.reviews[this.reviews.length - 1]?.id || '0') + 1}`;
	}
	public starHover(starIndex: number): void {
		if (!this.reviewStarsField) {
			return;
		}
		let newCounter = 1;
		for (let otherStar of this.reviewStarsField.children) {
			if (newCounter > starIndex) {
				otherStar.innerHTML = 'star_border';
			} else {
				otherStar.innerHTML = 'star';
			}
			newCounter++;
		}
	}

	public starLeave(): void {
		if (!this.reviewStarsField) {
			return;
		}
		let starIndex = 1;
		for (let otherStar of this.reviewStarsField.children) {
			if (this.numberOfStars === 0 || starIndex > this.numberOfStars) {
				otherStar.innerHTML = 'star_border';
			} else {
				otherStar.innerHTML = 'star';
			}
			starIndex++;
		}
	}
}
