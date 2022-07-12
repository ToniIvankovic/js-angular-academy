import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-all-shows',
	templateUrl: './all-shows.component.html',
	styleUrls: ['./all-shows.component.scss'],
})
export class AllShowsComponent {
	constructor(private readonly showService: ShowService) {}

	public get shows() {
		return this.showService.fetchAllShows();
	}
}
