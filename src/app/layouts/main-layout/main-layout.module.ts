import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { NavigationModule } from 'src/app/components/navigation/navigation/navigation.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [CommonModule, RouterModule, NavigationModule, MatIconModule],
})
export class MainLayoutModule {}
