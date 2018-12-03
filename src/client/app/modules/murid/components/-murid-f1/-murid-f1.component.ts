import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { EventService } from '../../../../services/event.service';
import { ArrayService } from '../../../../services/array.service';
import { ConsoleService } from '../../../../services/console.service';

import { BUILDER, SCHEMAS } from './-murid-f1.form';
@Component({
	selector: 'pras--murid-f1',
	templateUrl: './-murid-f1.component.html'
})
export class MuridF1Component implements OnDestroy, OnInit {
	SCHEMAS = SCHEMAS;
	MuridF1FGroup: FormGroup;
	waktu: any;
	get valid(): boolean {
		return this.MuridF1FGroup.valid;
	}
	constructor(
		public $_FormBuilder: FormBuilder,
		public S_Event: EventService,
		public S_Array: ArrayService,
		public S_Console: ConsoleService
	) { }
	ngOnDestroy() { }
	ngOnInit() {
		this.MuridF1FGroup = this.$_FormBuilder.group(BUILDER);
	}
	preventTyping(e: KeyboardEvent): void {
		if (!this.S_Array.inArray(e.which, [27, 9])) {
			e.preventDefault();
		}
	}
}
