import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-shows-container',
	templateUrl: './shows-container.component.html',
	styleUrls: ['./shows-container.component.scss'],
})
export class ShowsContainerComponent {
	public shows: Array<Show> = [
		new Show({
			title: 'Heartstopper',
			average_rating: 4.4,
			image_url: '../../../assets/heartstopper.jpg',
			description: 'TODO',
		}),
		new Show({
			title: 'Stranger Things',
			average_rating: 4.4,
			image_url:
				'https://www.cnet.com/a/img/resize/d44839c03c6af88f79b173fbdb6c39ce7aa67ed8/2019/06/16/d854efee-fad3-4dab-a53a-ed0b84410ca0/stranger-things-season-3-kids-eleven-scrunchie.jpg?auto=webp&fit=crop&height=675&width=1200',
			description: 'TODO',
		}),
		new Show({
			title: 'Love, Death & Robots',
			average_rating: 4.2,
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjQgMyCwagYSZ6obNp4bV3PKtGxBWu0YhWA&usqp=CAU',
			description: 'TODO',
		}),
		new Show({
			title: 'Élite',
			average_rating: 3.7,
			image_url: 'https://mixer.hr/wp-content/uploads/2022/04/ELite-mixer.hr_.jpg',
			description: 'TODO',
		}),
		new Show({
			title: 'Young Royals',
			average_rating: 4.2,
			image_url: 'https://www.filmmusicsite.com/images/covers/normal/95746.jpg',
			description: 'TODO',
		}),
		new Show({
			title: "The Queen's Gambit",
			average_rating: 4.3,
			image_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ab561e108026281.5fb4ad0673370.jpg',
			description: 'TODO',
		}),
		new Show({
			title: 'Arcane',
			average_rating: 4.5,
			image_url:
				//'https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/09/More-Riot-Games-Arcane-content-shown.jpg',
				'',
			description: 'TODO',
		}),
	];
}
