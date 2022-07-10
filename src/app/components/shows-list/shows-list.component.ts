import { Component, Input } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-shows-list',
	templateUrl: './shows-list.component.html',
	styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent {
	@Input() public shows: Array<Show> = [
		new Show({
			title: 'Heartstopper',
			average_rating: 4.9,
			image_url: '../../../assets/heartstopper.jpg',
			description: 'TODO',
		}),
		new Show({
			title: 'Stranger things',
			average_rating: 4.7,
			image_url:
				'https://www.cnet.com/a/img/resize/d44839c03c6af88f79b173fbdb6c39ce7aa67ed8/2019/06/16/d854efee-fad3-4dab-a53a-ed0b84410ca0/stranger-things-season-3-kids-eleven-scrunchie.jpg?auto=webp&fit=crop&height=675&width=1200',
			description: 'TODO',
		}),
		new Show({
			title: 'Stranger things',
			average_rating: 4.7,
			image_url:
				'https://media.glamour.com/photos/62bc80948d7bb5efa330ea9d/master/pass/STRANGER%20THINGS%20EDITS%20280622%20default-sq-StrangerThings_StrangerThings4_2_00_09_37_12.jpg',
			description: 'TODO',
		}),
	];

	public logger() {
		console.log(this.shows);
	}
}
