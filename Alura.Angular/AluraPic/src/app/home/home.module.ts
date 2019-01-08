import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/componentes/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class HomeModule {}
