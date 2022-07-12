import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsContainerComponentModule } from './components/shows-container/shows-container-component.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { AllShowsComponent } from './pages/all-shows/all-shows.component';
import { TopRatedShowsComponent } from './pages/top-rated-shows/top-rated-shows.component';
import { ShowDetailsComponent } from './pages/show-details/show-details.component';

@NgModule({
	declarations: [AppComponent, AllShowsComponent, TopRatedShowsComponent, ShowDetailsComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ShowsContainerComponentModule,
		MainLayoutModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
