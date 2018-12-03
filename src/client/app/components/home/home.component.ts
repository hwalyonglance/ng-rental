import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'pras-home',
	template: `
		<pras--container>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod fugit odio consectetur,
			unde perspiciatis explicabo dolorem iusto! Recusandae blanditiis error consequatur
			aspernatur minima maxime veniam. Libero sed dicta optio commodi?
			<pras--footer></pras--footer>
		</pras--container>
	`,
	styles: []
})
export class HomeComponent implements OnInit {
	constructor() { }
	ngOnInit() {
	}
}
