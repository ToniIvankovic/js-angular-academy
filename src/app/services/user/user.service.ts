import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private readonly http: HttpClient) {}

	public updateUserImage(user: IUser, image: File) {
		const form = new FormData();
		form.append('image', image);
		this.http.put('https://tv-shows.infinum.academy/users', form).subscribe((resp) => {
			console.log(resp);
			location.reload();
		});
	}
}
