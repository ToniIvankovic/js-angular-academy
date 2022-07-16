import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent {
	public shows: Show[] = [];
	constructor(private readonly showService: ShowService) {
		showService.fetchAllShows().forEach((observable) => {
			observable.subscribe((value) => this.shows.push(value));
		});
	}
}
