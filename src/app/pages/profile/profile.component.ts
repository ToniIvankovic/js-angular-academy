import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IUser } from 'src/app/services/auth/user.interface';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
	public user?: IUser;
	constructor(private readonly authService: AuthService) {
		this.user = authService.getCurrentUser();
	}
}
