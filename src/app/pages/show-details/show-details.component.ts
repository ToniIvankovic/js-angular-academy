import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Event, NavigationEnd, Router } from '@angular/router';
import { EMPTY, filter, map, Observable, Subscription, switchMap, tap, timer } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { Show } from 'src/app/models/show.model';
import { ReviewService } from 'src/app/services/review/review.service';
import { ShowService } from 'src/app/services/show/show.service';

const STORAGE_KEY = 'reviews';

@Component({
	selector: 'app-show-details',
	templateUrl: './show-details.component.html',
	styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnDestroy {
	public reviews$?: Observable<Review[]>;
	public show$: Observable<Show | undefined>;
	private subscription?: Subscription;
	public id$: Observable<string>;

	constructor(
		private readonly showService: ShowService,
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly reviewService: ReviewService,
	) {
		this.id$ = this.route.paramMap.pipe(
			map((parammap) => parammap.get('id')),
			filter((id) => !!id),
		) as Observable<string>;
		this.reviews$ = this.id$.pipe(
			switchMap((id) => {
				return this.reviewService.getReviews(id);
			}),
		);
		this.show$ = this.id$.pipe(
			switchMap((id) => {
				return showService.fetchById(id); //pretvori u str
			}),
		);
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}
