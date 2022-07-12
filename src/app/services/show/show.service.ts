import { Injectable } from '@angular/core';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	public shows: Array<Show> = [
		{
			uuid: 1,
			title: 'Heartstopper',
			average_rating: 4.4,
			image_url: 'https://u2k3a4x7.stackpathcdn.com/wp-content/uploads/2022/05/heartstopper.jpg',
			description: 'TODO',
		},
		{
			uuid: 2,
			title: 'Stranger Things',
			average_rating: 4.4,
			image_url:
				'https://www.cnet.com/a/img/resize/d44839c03c6af88f79b173fbdb6c39ce7aa67ed8/2019/06/16/d854efee-fad3-4dab-a53a-ed0b84410ca0/stranger-things-season-3-kids-eleven-scrunchie.jpg?auto=webp&fit=crop&height=675&width=1200',
			description: 'TODO',
		},
		{
			uuid: 3,
			title: 'Love, Death & Robots',
			average_rating: 4.2,
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjQgMyCwagYSZ6obNp4bV3PKtGxBWu0YhWA&usqp=CAU',
			description: 'TODO',
		},
		{
			uuid: 4,
			title: 'Élite',
			average_rating: 3.7,
			image_url: 'https://ntvb.tmsimg.com/assets/p15991777_b_h8_ae.jpg?w=960&h=540',
			description: 'TODO',
		},
		{
			uuid: 5,
			title: 'Young Royals',
			average_rating: 4.2,
			image_url: 'https://www.filmmusicsite.com/images/covers/normal/95746.jpg',
			description: 'TODO',
		},
		{
			uuid: 6,
			title: "The Queen's Gambit",
			average_rating: 4.3,
			image_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ab561e108026281.5fb4ad0673370.jpg',
			description: 'TODO',
		},
		{
			uuid: 7,
			title: 'Arcane',
			average_rating: null,
			image_url:
				'https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/09/More-Riot-Games-Arcane-content-shown.jpg',
			description: 'TODO',
		},
	].map((i) => new Show(i));

	constructor() {}

	public get nextId(): number {
		let maxId = 0;
		this.shows
			.map((show) => show.uuid)
			.forEach((id) => {
				if (id > maxId) {
					maxId = id;
				}
			});
		return maxId + 1;
	}

	public fetchAllShows(): Array<Show> {
		return this.shows;
	}

	private fetchAboveRating(rating: number): Array<Show> {
		return this.shows.filter((show) => (show.averageRating || 0) > rating);
	}

	public fetchTopRated(): Array<Show> {
		return this.fetchAboveRating(4);
	}

	public fetchById(id: number): Show | null {
		const foundShow = this.shows.find((show) => show.uuid == id);
		if (!foundShow) {
			return null;
			// throw new Error(`No show with id ${id}`);
		}
		return foundShow;
	}

	public addNewShow(show: Show): void {
		if (this.shows.map((show) => show.uuid).find((id) => id == show.uuid)) {
			throw new Error(`Cannot add existing uuid of ${show.uuid}`);
		}
		this.shows.push(show);
	}
}
