import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-show-form',
	templateUrl: './show-form.component.html',
	styleUrls: ['./show-form.component.scss'],
})
export class ShowFormComponent {
	@Output() add = new EventEmitter<Show>();
	public showName: string = '';
	public description: string = '';
	public imgURL: string = '';

	constructor(private readonly showService: ShowService) {}

	public onSubmit() {
		const newShow = new Show({
			uuid: this.showService.nextId,
			title: this.showName,
			description: this.description,
			average_rating: null,
			image_url: this.imgURL,
		});
		this.add.emit(newShow);
		this.showName = '';
		this.description = '';
		this.imgURL = '';
	}
}
