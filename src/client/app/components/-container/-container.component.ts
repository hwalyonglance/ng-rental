import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
	selector: 'pras--container',
	templateUrl: './container.component.html',
	styles: [`
	.mat-sidenav{
		width: 255px;
		background-color: #ff6e40;
		/* box-shadow: 5px 0 5px #ff9800; */
	}
	`]
})
export class ContainerComponent implements OnInit {
	constructor(
		public S_Sidenav: SidenavService
	) { }

	ngOnInit() {
	}
}
