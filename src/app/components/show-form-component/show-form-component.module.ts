import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFormComponent } from './show-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ShowFormComponent],
	imports: [CommonModule, MatInputModule, MatCardModule, MatButtonModule, FormsModule],
	exports: [ShowFormComponent],
})
export class ShowFormComponentModule {}
