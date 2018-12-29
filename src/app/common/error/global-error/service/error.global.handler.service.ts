import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorGlobalHandlerService implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any) {
        const router = this.injector.get(Router);
        console.log('error ${router.url} : ' + router.url);
        if (error instanceof HttpErrorResponse) {
            console.log('error response code : ', error.status);
            console.log('error response body : ', error.message);
        } else {
            console.log('error est surevenu : ', error.message);
        }
        router.navigate(['/error']);
    }
}