import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendaftaranComponent } from './pendaftaran.component';

const routes: Routes = [
	{ path: 'pendaftaran', component: PendaftaranComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PendaftaranRoutingModule { }

export const routedComponents = [PendaftaranComponent];
