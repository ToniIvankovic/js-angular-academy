import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-top-rated-shows',
	templateUrl: './top-rated-shows.component.html',
	styleUrls: ['./top-rated-shows.component.scss'],
})
export class TopRatedShowsComponent {
	public shows: Show[] = [];
	constructor(private readonly showService: ShowService) {
		showService.fetchTopRated().forEach((observable) => {
			observable.subscribe((value) => this.shows.push(value));
		});
	}
}
