import { IReview } from './review.interface';

export class Review {
	public uuid: number;
	public showid: number;
	public rating: number;
	public comment: string;

	constructor(rawReview: IReview) {
		this.uuid = rawReview.uuid;
		this.showid = rawReview.showId;
		this.rating = rawReview.rating;
		this.comment = rawReview.comment;
	}
}
