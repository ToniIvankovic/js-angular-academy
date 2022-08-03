import { IUser } from './user.interface';

export interface IReview {
	id: string;
	showId: string;
	comment: string;
	rating: number;
	user: IUser;
}
