import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-show-form',
	templateUrl: './show-form.component.html',
	styleUrls: ['./show-form.component.scss'],
})
export class ShowFormComponent implements OnInit {
	@Output() add = new EventEmitter<Show>();
	public showName: string = '';
	public description: string = '';
	public imgURL: string = '';

	constructor() {}

	ngOnInit(): void {
		return;
	}

	public onSubmit() {
		console.log(this.showName);
		console.log(this.imgURL);
		console.log(this.description);
		let newShow = new Show({
			title: this.showName,
			description: this.description,
			average_rating: null,
			image_url: this.imgURL,
		});
		this.add.emit(newShow);
	}
}
