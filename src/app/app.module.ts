import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsContainerComponentModule } from './components/shows-container/shows-container-component.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { AllShowsModule } from './pages/all-shows/all-shows.module';
import { TopRatedShowsModule } from './pages/top-rated-shows/top-rated-shows.module';
import { ShowDetailsModule } from './pages/show-details/show-details.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ShowsContainerComponentModule,
		MainLayoutModule,
		AllShowsModule,
		TopRatedShowsModule,
		ShowDetailsModule,
		LoginModule,
		RegisterModule,
		LoginModule,
		RegisterModule,
		HttpClientModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: AuthInterceptor,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
