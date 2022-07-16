import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Event, NavigationEnd, Router } from '@angular/router';
import { filter, timer } from 'rxjs';
import { Review } from 'src/app/services/review/review.model';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

const STORAGE_KEY = 'reviews';

@Component({
	selector: 'app-show-details',
	templateUrl: './show-details.component.html',
	styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
	public reviews: Array<Review> = [];
	private allReviews: Array<Review> = [];

	constructor(
		private readonly showService: ShowService,
		private readonly route: ActivatedRoute,
		private readonly router: Router,
	) {
		this.router.events
			// .pipe(filter((event: Event) => {
			// 	return event instanceof NavigationEnd;
			// }))
			.subscribe((event) => {
				if (event instanceof ActivationEnd && event.snapshot.component?.name == ShowDetailsComponent.name) {
					this.id = event.snapshot.params['id'];
					this._show = this.showService.fetchById(this.id);
					this.findReviewsForShow(this.id);
				}
			});
	}

	ngOnInit(): void {
		this.allReviews = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		this.findReviewsForShow(this.id);
	}

	private findReviewsForShow(id: number): void {
		this.reviews = this.allReviews.filter((review) => review.showid === id);
	}

	public storeNewReview(review: Review): void {
		this.reviews.push(review);
		this.allReviews.push(review);
		this.saveToLocalStorage(this.allReviews);
	}

	private saveToLocalStorage(reviews: Review[]): void {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
	}

	public onDeleteReview(review: Review) {
		this.allReviews.splice(this.allReviews.indexOf(review), 1);
		this.findReviewsForShow(this.id);
		this.saveToLocalStorage(this.allReviews);
	}

	private _show: Show | null = null;
	public id: number = 0;

	public get show(): Show | null {
		// this.findIdAndShow();
		if (!this._show) {
			this.router.navigateByUrl('/');
		}
		return this._show;
	}

	public get title(): string {
		return this.show?.title || '';
	}
	public get avgRating(): number | null {
		return this.show?.averageRating || null;
	}
	public get description(): string {
		return this.show?.description || '';
	}
	public get imgUrl(): string | null {
		return this.show?.imageUrl || null;
	}
}
