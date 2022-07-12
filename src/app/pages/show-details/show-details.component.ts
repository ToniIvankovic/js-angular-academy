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
	private forceReload: boolean = false;
	private id: number = 0;

	private findShow(): Show | null {
		return this.showService.fetchById(this.id);
	}

	private get show(): Show {
		const id = this.route?.snapshot.params['id'];
		if (!this._show || id != this.id) {
			this.id = id;
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

	public get title(): string {
		return this.show.title;
	}
	public get avgRating(): number | null {
		return this.show.averageRating;
	}
	public get description(): string {
		return this.show.description;
	}
	public get imgUrl(): string | null {
		return this.show.imageUrl;
	}
}
