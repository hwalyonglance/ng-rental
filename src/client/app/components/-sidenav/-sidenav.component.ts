import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pras--sidenav',
	templateUrl: './-sidenav.component.html',
	styles: [`
	.mat-nav-list{
		padding: 0 !important;
	}
	.mat-list-item, mat-subheader, h3{
		background-color: #EEE;
		border-bottom: 1px solid #455a64;
		margin: 0 !important;
	}
	.mat-subheader:hover{
		background-color: #76ff03;
	}
	`]
})
export class SidenavComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
