import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsContainerComponentModule } from './shows-container-component/shows-container/shows-container-component.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ShowsContainerComponentModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
