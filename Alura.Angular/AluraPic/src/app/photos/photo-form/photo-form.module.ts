import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/componentes/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from '../../shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
        ImmediateClickModule,
        PhotoModule
    ]
})
export class PhotoFormModule {}
