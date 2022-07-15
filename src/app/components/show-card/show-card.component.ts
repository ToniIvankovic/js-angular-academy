import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent {
	@Input() public title: string = '';
	@Input() public averageRating: number | null = null;
	@Input() public imageUrl: string | null = '';

	public get placeholderURL() {
		return `https://via.placeholder.com/300x240/e4c484/3b3b3b?text=${this.title}`;
	}

	public switchLink(event: any) {
		if (!event.target) {
			return;
		} else {
			event.target['src'] = this.placeholderURL;
		}
	}
}
