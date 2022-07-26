import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
	public user$?: Observable<IUser | null>;
	constructor(private readonly authService: AuthService) {
		this.user$ = authService.getCurrentUser().pipe(tap(console.log));
	}
}
