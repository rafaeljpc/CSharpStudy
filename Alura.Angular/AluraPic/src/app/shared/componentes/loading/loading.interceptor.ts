import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';


@Injectable({ providedIn: 'root'})
export class LoadingInterceptor implements HttpInterceptor {

    constructor(
        private loadingService: LoadingService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next
            .handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.loadingService.stop();
                } else {
                    this.loadingService.start();
                }
            }));
    }
}
