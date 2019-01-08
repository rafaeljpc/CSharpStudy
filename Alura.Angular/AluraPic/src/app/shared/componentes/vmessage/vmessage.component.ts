import { Component, OnInit, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent implements OnInit {
    @Input() text = '';

    constructor() { }

    ngOnInit(): void { }
}
