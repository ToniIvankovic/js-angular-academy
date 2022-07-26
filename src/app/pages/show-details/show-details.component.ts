import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Event, NavigationEnd, Router } from '@angular/router';
import { EMPTY, filter, map, Observable, Subscription, switchMap, timer } from 'rxjs';
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
	private allReviews: Array<Review> = [];
	public show$: Observable<Show | undefined>;
	private subscription?: Subscription;
	constructor(
		private readonly showService: ShowService,
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly reviewService: ReviewService,
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
		this.subscription = this.show$.subscribe((show) => {
			this.id = show?.id || '';
			this.allReviews = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
			this.reviews$ = this.reviewService.getReviews(this.id);
		});
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

	public id: string = '';
}
