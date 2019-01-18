import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    private _isShown = false;

    constructor() { }

    ngOnInit(): void { }

    get isShown() {
        return this._isShown;
    }

    toggle() {
        this._isShown = !this._isShown;
    }
}
