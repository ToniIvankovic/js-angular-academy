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
		this.findIdAndShow();
	}

	//Kakoc se ne bi svaki put morao ponovno tražiti id
	private _show: Show | null = null;
	private id: number = 0;

	private findIdAndShow() {
		this.id = this.route?.snapshot.params['id'];
		this._show = this.showService.fetchById(this.id);
	}

	public get show(): Show | null {
		this.findIdAndShow();
		if (!this._show) {
			this.router.navigateByUrl('/');
		}
		return this._show;
	}

	public get title(): string {
		return this.show?.title || '';
	}
	public get avgRating(): number | null {
		return this.show?.averageRating || null;
	}
	public get description(): string {
		return this.show?.description || '';
	}
	public get imgUrl(): string | null {
		return this.show?.imageUrl || null;
	}
}
