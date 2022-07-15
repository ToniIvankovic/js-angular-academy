import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
	@Input() public avgRating: number | null = 0;
	public ratingText: string = '';

	public get ratingWidth() {
		return this.avgRating || 0;
	}
	constructor() {}

	ngOnInit(): void {
		if (!this.avgRating) {
			this.ratingText = 'No ratings';
		} else {
			this.ratingText = `${this.avgRating}`;
		}
	}

	public calcYellowWidth(width: number): number {
		return 20 * width;
	}
}
