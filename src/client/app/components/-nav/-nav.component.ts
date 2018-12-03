import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
	selector: 'pras--nav',
	templateUrl: './-nav.component.html',
	styles: [`
		.example-spacer {
			flex: 1 1 auto;
		}
	`]
})
export class NavComponent implements OnInit {
	@Input() sidenavOpened = !this.S_Sidenav.isScreenSmall();
	@Output() $pras_sidenav$: EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor(
		public S_Sidenav: SidenavService
	) {

	}
	ngOnInit() {
		this.$pras_sidenav$.subscribe((s) => {
			this.sidenavOpened = s ? true : false;
		});
	}
	onBtnClick(): void {
		this.$pras_sidenav$.next();
	}
}
