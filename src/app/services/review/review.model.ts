import { IReview } from './review.interface';

export class Review {
	public uuid: string;
	public showid: string;
	public rating: number;
	public comment: string;

	constructor(rawReview: IReview) {
		this.uuid = rawReview.uuid;
		this.showid = rawReview.showId;
		this.rating = rawReview.rating;
		this.comment = rawReview.comment;
	}
}
