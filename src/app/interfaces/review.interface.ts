import { IUser } from './user.interface';

export interface IReview {
	id?: string;
	user?: IUser;
	show_id: string;
	comment: string;
	rating: number;
}
