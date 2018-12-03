import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { PendaftaranRoutingModule } from './pendaftaran-routing.module';
import { PendaftaranComponent } from './pendaftaran.component';

@NgModule({
	imports: [
		PendaftaranRoutingModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		NoopAnimationsModule
	],
	exports: [],
	declarations: [PendaftaranComponent],
	providers: [],
})
export class PendaftaranModule { }
