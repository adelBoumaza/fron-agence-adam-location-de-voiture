import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ApiAgenceAdamService } from '../service/api.agence.adam.service';

@Injectable()
export class ApiResolverAgenceAdamService   implements Resolve<any>{
    constructor(private _apiAgenceAdam:ApiAgenceAdamService){}

    resolve(url)
    {
        return;

    }
}