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

	public onImgError(event: any) {
		//kako umjesto any predati event koji ima i src
		let altUrl = `https://via.placeholder.com/300x240/e6b800/3b3b3b?text=${this.title}`;
		// console.log(event)
		this.imageUrl = altUrl;
		event.src = altUrl;
	}
	ngOnInit() {
		if (!this.averageRating) {
			this.averageRating = 'No ratings';
		}
	}
}
