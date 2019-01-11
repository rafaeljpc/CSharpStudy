import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/platform/platform-detector.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {
    constructor(
        private element: ElementRef<any>,
        private platformDetector: PlatformDetectorService
    ) { }

    ngOnInit(): void {
        if (this.platformDetector.isPlatformBrowser()) {
            this.element.nativeElement.click();
        }
    }
}
