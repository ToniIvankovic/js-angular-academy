import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent {
	@Input() public title: string = '';
	@Input() public averageRating: number | null = null;
	@Input() public imageUrl: string | null = null;
}
