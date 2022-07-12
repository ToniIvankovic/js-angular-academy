import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsContainerComponent } from './components/shows-container/shows-container.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: ShowsContainerComponent,
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
