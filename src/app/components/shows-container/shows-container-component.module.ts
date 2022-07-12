import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsContainerComponent } from './shows-container.component';
import { ShowsListComponentModule } from '../shows-list/shows-list-component.module';

@NgModule({
	declarations: [ShowsContainerComponent],
	imports: [CommonModule, ShowsListComponentModule],
	exports: [ShowsContainerComponent],
})
export class ShowsContainerComponentModule {}
