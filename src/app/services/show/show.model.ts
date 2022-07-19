import { IShow } from './show.interface';
export class Show {
	public uuid: string;
	public title: string;
	public description: string;
	public averageRating: number | null;
	public imageUrl: string | null;

	constructor(rawShow: IShow) {
		this.uuid = rawShow.uuid;
		this.title = rawShow.title;
		this.description = rawShow.description;
		this.averageRating = rawShow.average_rating;
		this.imageUrl = rawShow.image_url;
	}
}
