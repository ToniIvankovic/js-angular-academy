import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsListComponent } from './shows-list.component';
import { ShowCardModule } from '../show-card/show-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ShowsListComponent],
	imports: [CommonModule, ShowCardModule, RouterModule],
	exports: [ShowsListComponent],
})
export class ShowsListComponentModule {}
