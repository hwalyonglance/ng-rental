import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
	selector: 'pras--footer',
	templateUrl: '-footer.component.html',
    styles: [`
        #container div{
            padding: 10px 20px;
        }
    `]
})
export class FooterComponent implements OnInit {

	constructor(
        public S_Sidenav: SidenavService
    ) {}

	ngOnInit() {}

}
