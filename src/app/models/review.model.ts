import { IUser } from '../interfaces/user.interface';
import { IReview } from '../interfaces/review.interface';

export class Review {
	public id?: string;
	public show_id: string;
	public rating: number;
	public comment: string;
	public user?: IUser;

	constructor(rawReview: IReview) {
		this.show_id = rawReview.show_id;
		this.rating = rawReview.rating;
		this.comment = rawReview.comment;
		this.id = rawReview.id;
		this.user = rawReview.user;
	}
}
