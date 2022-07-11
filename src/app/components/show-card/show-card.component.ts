import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
	@Input() public title: string = '';
	@Input() public averageRating: number | null | string = null;
	@Input() public imageUrl: string | null = '';

	public get placeholderURL() {
		return `https://via.placeholder.com/300x240/e6b800/3b3b3b?text=${this.title}`;
	}

	ngOnInit() {
		if (!this.averageRating) {
			this.averageRating = 'No ratings';
		}
	}
}
