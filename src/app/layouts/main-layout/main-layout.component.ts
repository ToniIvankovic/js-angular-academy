import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
	constructor() {}

	public calcWidth() {
		return document.documentElement.clientWidth * 0.75;
	}
}
