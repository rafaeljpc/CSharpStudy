import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule],
    exports: [SearchComponent],
    providers: [],
})
export class SearchModule {}
