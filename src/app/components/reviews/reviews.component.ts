import { Component, Input, OnInit } from '@angular/core';
import { first, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review/review.service';

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

	@Input() reviews: Review[] | null = [];
	@Input() showId: string = '';

	constructor(private readonly authService: AuthService, private readonly reviewService: ReviewService) {}

	ngOnInit(): void {
		this.reviewStarsField = document.querySelector('#stars');
	}

	public onButtonClick() {
		if (this.numberOfStars === 0) {
			return;
		}
		const newReview = new Review({
			comment: this.reviewText,
			rating: this.numberOfStars,
			show_id: this.showId,
		});
		this.reviewService.createReview(newReview);
		this.authService
			.getCurrentUser()
			.pipe(first())
			.subscribe((user) => {
				newReview.user = user;
				this.reviews?.unshift(newReview);
			});

		this.reviewText = '';
		this.numberOfStars = 0;
		this.starLeave();
	}

	public starHover(starIndex: number): void {
		if (!this.reviewStarsField) {
			return;
		}
		let newCounter = 1;
		for (let otherStar of this.reviewStarsField.children) {
			if (newCounter > starIndex) {
				otherStar.innerHTML = 'star_border';
				otherStar.classList.add('colorStar');
				otherStar.classList.remove('whiteStar');
			} else {
				otherStar.innerHTML = 'star';
				otherStar.classList.add('whiteStar');
				otherStar.classList.remove('colorStar');
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
				otherStar.classList.add('colorStar');
				otherStar.classList.remove('whiteStar');
			} else {
				otherStar.innerHTML = 'star';
				otherStar.classList.add('whiteStar');
				otherStar.classList.remove('colorStar');
			}
			starIndex++;
		}
	}
}
