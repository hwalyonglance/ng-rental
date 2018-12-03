import { NgModule } from '@angular/core';
import {
	MdDatepickerModule,
	MdMenuModule,
	MdButtonModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdSelectModule,
	MdSidenavModule,
	MdStepperModule,
	MdToolbarModule
} from '@angular/material';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { CdkTableModule } from '@angular/cdk/table';
import { MdNativeDateModule, MdRippleModule } from '@angular/material';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';

const MdModules: any[] = [
	MdDatepickerModule,
	MdMenuModule,
	MdButtonModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdSelectModule,
	MdSidenavModule,
	MdStepperModule,
	MdToolbarModule
];
const CdkModules: any[] = [
	A11yModule,
	BidiModule,
	CdkTableModule,
	MdNativeDateModule, MdRippleModule,
	ObserversModule,
	PlatformModule,
	PortalModule
];

@NgModule({
	imports: [
		...MdModules,
		...CdkModules
	],
	exports: [
		...MdModules,
		...CdkModules
	],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
