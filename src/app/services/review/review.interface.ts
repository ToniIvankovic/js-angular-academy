import { IUser } from '../auth/user.interface';

export interface IReview {
	id: string;
	showId: string;
	comment: string;
	rating: number;
	user: IUser;
}
