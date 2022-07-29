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
	public user$?: Observable<IUser | undefined>;
	constructor(private readonly authService: AuthService) {
		this.user$ = authService.getCurrentUser();
	}

	public onFileDrop(event: DragEvent) {
		event.preventDefault();
		this.emitFile(event.dataTransfer?.files[0]);
	}

	public onDragOver(event: DragEvent) {
		event.preventDefault();
	}

	public onFileInputChange(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		this.emitFile((inputElement.files as FileList)[0]);
	}

	private emitFile(file: File | undefined) {
		console.log(file);
	}
}
