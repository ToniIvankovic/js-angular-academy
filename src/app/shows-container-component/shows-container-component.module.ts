import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsContainerComponent } from './shows-container/shows-container.component';

@NgModule({
	declarations: [ShowsContainerComponent],
	imports: [CommonModule],
	exports: [ShowsContainerComponent],
})
export class ShowsContainerComponentModule {}
