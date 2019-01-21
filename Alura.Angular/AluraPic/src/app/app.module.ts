import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photo.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { GlobalErrorHandler } from './errors/global-error-handler/global-error-handler';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        ErrorsModule,
        BrowserModule,
        PhotosModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
