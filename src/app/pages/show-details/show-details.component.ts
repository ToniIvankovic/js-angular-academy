import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-show-details',
	templateUrl: './show-details.component.html',
	styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent {
	constructor(
		private readonly showService: ShowService,
		private readonly route: ActivatedRoute,
		private readonly router: Router,
	) {
		this._show = this.findShow();
	}

	//Kakoc se ne bi svaki put morao ponovno tražiti id
	private _show: Show | null;

	private findShow(): Show | null {
		const id = this.route?.snapshot.params['id'];
		return this.showService.fetchById(id);
	}

	private get show(): Show {
		if (!this._show) {
			this._show = this.findShow();
		}
		if (!this._show) {
			this.router.navigateByUrl('/');
			//Ne mogu zakomentirati ovo dalje jer će se buniti oko return typea
			return new Show({
				uuid: 0,
				average_rating: 5,
				title: 'No show with such id',
				description: 'No',
				image_url: '',
			});
		}
		return this._show;
	}

	public title: string = this.show.title;
	public avgRating: number | null = this.show.averageRating;
	public description: string = this.show.description;
	public imgUrl: string | null = this.show.imageUrl;
}
