import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
    declarations: [DarkOnHoverDirective],
    imports: [ CommonModule ],
    exports: [DarkOnHoverDirective],
    providers: [],
})
export class DarkenOnHoverModule {}
