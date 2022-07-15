import { Component, OnInit } from '@angular/core';
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
	public reviews: Array<Review> = [];

	ngOnInit(): void {
		this.reviewStarsField = document.querySelector('#stars');
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
