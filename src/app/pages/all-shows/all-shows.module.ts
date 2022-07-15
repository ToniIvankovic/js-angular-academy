import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsContainerComponentModule } from 'src/app/components/shows-container/shows-container-component.module';
import { AllShowsComponent } from './all-shows.component';

@NgModule({
	declarations: [AllShowsComponent],
	imports: [CommonModule, ShowsContainerComponentModule],
})
export class AllShowsModule {}
