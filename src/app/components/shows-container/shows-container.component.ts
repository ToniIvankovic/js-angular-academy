import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-shows-container',
	templateUrl: './shows-container.component.html',
	styleUrls: ['./shows-container.component.scss'],
})
export class ShowsContainerComponent {
	constructor(private readonly showService: ShowService) {}

	public get shows() {
		return this.showService.fetchAllShows();
	}

	public onShowAdd(show: Show) {
		this.showService.addNewShow(show);
	}
}
