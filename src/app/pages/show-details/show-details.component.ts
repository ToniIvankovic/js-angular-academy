import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Event, NavigationEnd, Router } from '@angular/router';
import { EMPTY, filter, map, Observable, switchMap, timer } from 'rxjs';
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
	public show$: Observable<Show | undefined>;

	constructor(
		private readonly showService: ShowService,
		private readonly route: ActivatedRoute,
		private readonly router: Router,
	) {
		this.show$ = this.route.paramMap.pipe(
			map((parammap) => parammap.get('id')),
			switchMap((id) => {
				if (!id) {
					return EMPTY;
				}
				return showService.fetchById(id); //pretvori u str
			}),
		);
	}

	ngOnInit(): void {
		this.allReviews = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		this.findReviewsForShow(this.id);
	}

	private findReviewsForShow(id: string): void {
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

	// private _show: Show | undefined = undefined;
	public id: string = '';

	// public get show(): Show | undefined {
	// 	return this._show;
	// }

	// public get title(): string {
	// 	return this.show?.title || '';
	// }
	// public get avgRating(): number | null {
	// 	return this.show?.averageRating || null;
	// }
	// public get description(): string {
	// 	return this.show?.description || '';
	// }
	// public get imgUrl(): string | null {
	// 	return this.show?.imageUrl || null;
	// }
}
