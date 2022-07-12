import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-top-rated-shows',
	templateUrl: './top-rated-shows.component.html',
	styleUrls: ['./top-rated-shows.component.scss'],
})
export class TopRatedShowsComponent {
	constructor(private readonly showService: ShowService) {}

	public get shows() {
		return this.showService.fetchTopRated();
	}
}
