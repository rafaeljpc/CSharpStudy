import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/componentes/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SignInComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class HomeModule {}
