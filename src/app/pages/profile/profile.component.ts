import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
	public user$?: Observable<IUser | undefined>;
	public selectedPhoto: boolean = false;
	private file?: File;
	public uploadedImageUrl?: string;

	constructor(private readonly authService: AuthService, private readonly userService: UserService) {
		this.user$ = authService.getCurrentUser();
	}

	public onFileDrop(event: DragEvent) {
		event.preventDefault();
		this.prepareFileForUpload(event.dataTransfer?.files[0]);
	}

	public onDragOver(event: DragEvent) {
		event.preventDefault();
	}

	public onFileInputChange(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		this.prepareFileForUpload((inputElement.files as FileList)[0]);
	}

	private prepareFileForUpload(file: File | undefined) {
		this.selectedPhoto = true;
		this.file = file;

		if (file) {
			const reader = new FileReader();
			reader.addEventListener(
				'load',
				() => {
					this.uploadedImageUrl = reader.result as string;
				},
				false,
			);

			reader.readAsDataURL(file);
		}

		console.log(file);
	}

	public onUploadClick() {
		console.log(this.file);
		this.user$?.subscribe((user) => {
			console.log(user);
			this.userService.updateUserImage(user!, this.file!);
		});
	}

	public onClearClick() {
		this.selectedPhoto = false;
	}
}
