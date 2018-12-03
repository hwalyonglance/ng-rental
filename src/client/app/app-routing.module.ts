import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";

import { PendaftaranModule } from './modules/pendaftaran/pendaftaran.module';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		PendaftaranModule
	],
	exports: [RouterModule],
})
export class AppRoutingModule { }

