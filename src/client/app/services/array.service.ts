import { Injectable } from '@angular/core';

@Injectable()
export class ArrayService {
	constructor () { }
	inArray (search: any, arr: any[]): boolean {
		let _retVal = false;
		arr.forEach((item, index, _arr) => {
			if (search == item) {
				_retVal = true;
			}
		});
		return _retVal;
	}
}
