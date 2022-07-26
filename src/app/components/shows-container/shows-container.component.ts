import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-shows-container',
	templateUrl: './shows-container.component.html',
	styleUrls: ['./shows-container.component.scss'],
})
export class ShowsContainerComponent {
	@Input() public shows: Array<Show> = [];
	constructor(private readonly showService: ShowService) {}

	public onShowAdd(show: Show) {
		this.showService.addNewShow(show);
	}
}
