import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { BUILDER, SCHEMAS } from './-murid-f2.form';
@Component({
	selector: 'pras--murid-f2',
	templateUrl: './-murid-f2.component.html'
})
export class MuridF2Component implements OnInit {
	SCHEMAS = SCHEMAS;
	MuridF2FGroup: FormGroup;
	constructor(
		public $_FormBuilder: FormBuilder
	) { }
	ngOnInit() {
		this.MuridF2FGroup = this.$_FormBuilder.group(BUILDER);
	}
}
