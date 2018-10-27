import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { RevisionService } from "../../revision/revision.service";

@Injectable()
export class RevisionResolver implements Resolve<any>{

    constructor(private _revisionService:RevisionService){}
    
    resolve()
    {
        console.log("resolve revision called")
        return this._revisionService.findAllRevision();
    }
}