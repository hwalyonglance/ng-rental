import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { BUILDER as BUILDER_F1 } from '../../modules/murid/components/-murid-f1/-murid-f1.form';
import { BUILDER as BUILDER_F2 } from '../../modules/murid/components/-murid-f2/-murid-f2.form';
@Component({
	selector: 'pras-about',
	templateUrl: './about.component.html',
	styles: [`

	`]
})
export class AboutComponent implements OnInit {
	MuridFormGroup: FormGroup;
	get formArray(): AbstractControl | null {
		return this.MuridFormGroup.get('formArray');
	}
	constructor(
		public $_FormBuilder: FormBuilder
	) { }
	ngOnInit() {
		this.MuridFormGroup = this.$_FormBuilder.group({
			formArray: this.$_FormBuilder.array([
				this.$_FormBuilder.group(BUILDER_F1),
				this.$_FormBuilder.group(BUILDER_F2)
			])
		});
	}

}
