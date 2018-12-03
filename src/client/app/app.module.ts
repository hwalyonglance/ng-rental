import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { MaterialModule } from './material.module';
import { MuridModule } from './modules/murid/murid.module';

import { AppRoutingModule } from './app-routing.module';

import { SidenavService } from './services/sidenav.service';
import { EventService } from './services/event.service';
import { ArrayService } from './services/array.service';
import { ConsoleService } from './services/console.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/-nav/-nav.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/-footer/-footer.component';
import { ContainerComponent } from './components/-container/-container.component';
import { SidenavComponent } from './components/-sidenav/-sidenav.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavComponent,
		AboutComponent,
		FooterComponent,
		ContainerComponent,
		SidenavComponent
	],
	imports: [
		AppRoutingModule,
		MuridModule,

		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		FormsModule, ReactiveFormsModule,
		MaterialModule,
		NoopAnimationsModule
	],
	providers: [
		SidenavService,
		EventService,
		ArrayService,
		ConsoleService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
