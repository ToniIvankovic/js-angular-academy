import { Component, Input } from '@angular/core';
import { Show } from 'src/app/models/show.model';

@Component({
	selector: 'app-shows-list',
	templateUrl: './shows-list.component.html',
	styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent {
	@Input() public shows: Array<Show> = [];
}
