class Show {
	public title: string;
	public description: string;
	public average_rating: number | null;
	public image_url: string | null;

	constructor(rawShow: IShow) {
		this.title = rawShow.title;
		this.description = rawShow.description;
		this.average_rating = rawShow.average_rating;
		this.image_url = rawShow.image_url;
	}
}
