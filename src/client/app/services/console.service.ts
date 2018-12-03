import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleService {
	constructor () { }
	log (...msg: any[]): void {
		console.log(...msg);
	}
	error (...msg: any[]): void {
		console.error(...msg);
	}
	debug (...msg: any[]): void {
		console.debug(...msg);
	}
	info (...msg: any[]): void {
		console.info(...msg);
	}
	assert (test?: boolean, message?: string, ...optionalParams: any[]): any {
		console.assert(test, message, ...optionalParams);
	}
}
