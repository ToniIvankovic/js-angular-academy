import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IReview } from 'src/app/interfaces/review.interface';
import { Review } from 'src/app/models/review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	constructor(private readonly http: HttpClient) {}

	public createReview(review: Review): void {
		// delete review.id;
		// delete review.user;
		this.http.post('https://tv-shows.infinum.academy/reviews', review).subscribe();
	}
	public getReviews(showId: string): Observable<Review[]> {
		return this.http
			.get<{ reviews: IReview[] }>('https://tv-shows.infinum.academy/shows/' + showId + '/reviews')
			.pipe(map((response) => response.reviews.map((review) => new Review(review))));
	}
	public editReview(review: Review): void {
		// this.http.post('https://tv-shows.infinum.academy/reviews', review);
	}
	public deleteReview(review: Review): void {
		this.http.delete('https://tv-shows.infinum.academy/reviews/' + review.id).subscribe();
	}
}
