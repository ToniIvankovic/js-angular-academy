import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsContainerComponentModule } from 'src/app/components/shows-container/shows-container-component.module';
import { TopRatedShowsComponent } from './top-rated-shows.component';

@NgModule({
	declarations: [TopRatedShowsComponent],
	imports: [CommonModule, ShowsContainerComponentModule],
})
export class TopRatedShowsModule {}
