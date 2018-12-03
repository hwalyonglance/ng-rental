import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../material.module';

import { MuridF1Component } from './components/-murid-f1/-murid-f1.component';
import { MuridF2Component } from './components/-murid-f2/-murid-f2.component';
import { MuridF3Component } from './components/-murid-f3/-murid-f3.component';

const MuridComponents: any[] = [
	MuridF1Component,
	MuridF2Component,
	MuridF3Component
];

@NgModule({
	imports: [
		BrowserAnimationsModule,
		FlexLayoutModule,
		FormsModule, ReactiveFormsModule,
		MaterialModule,
		NoopAnimationsModule
	],
	exports: [
		...MuridComponents,
		MaterialModule
	],
	declarations: [...MuridComponents],
	providers: [],
})
export class MuridModule { }
