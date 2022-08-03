import { IUser } from '../auth/user.interface';
import { IReview } from './review.interface';

export class Review {
	public id: string;
	public showid: string;
	public rating: number;
	public comment: string;
	public user: IUser;

	constructor(rawReview: IReview) {
		this.id = rawReview.id;
		this.showid = rawReview.showId;
		this.rating = rawReview.rating;
		this.comment = rawReview.comment;
		this.user = rawReview.user;
	}
}
