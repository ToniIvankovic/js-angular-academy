import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
	constructor() {}

	// ngOnInit(): void {
	// 	this.onResize();
	// }

	public navigationVisible = false;

	public readonly logoImgUrl = '../../../assets/logo.svg';
	public readonly hambMenuUrl =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png';

	public onHambMenuClick() {
		this.navigationVisible = !this.navigationVisible;
	}

	// public calcWidth() {
	// 	return document.documentElement.clientWidth * 0.75;
	// }

	// public onResize() {
	// 	const newWidth = this.calcWidth();
	// 	const rest = document.getElementById('rest')!;
	// 	if(newWidth < 738){
	// 		rest.style.width = "";
	// 		return;
	// 	}
	// 	// rest.style.width = newWidth + 'px';
	// }
}
