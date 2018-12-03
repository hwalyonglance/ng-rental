import { Injectable } from '@angular/core';

@Injectable()
export class SidenavService {
    readonly SMALL_WIDTH_BREAKPOINT = 720;
    constructor() { }
    isScreenSmall(): boolean {
        return window.matchMedia(`(max-width: ${this.SMALL_WIDTH_BREAKPOINT}px)`).matches;
    }
    mode(): string {
        return this.isScreenSmall() ? 'over' : 'side';
    }
}
