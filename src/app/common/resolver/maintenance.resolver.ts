import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MaintenanceService } from '../../maintenance/maintenance.service';



@Injectable()
export class MaintenanceResolver implements Resolve<any> {
   
    constructor(private _maintenanceService:MaintenanceService){}
    
    resolve()
    {
        console.log("resolve Maintenance called")
        return this._maintenanceService.findAllMaintenance(null);
    }
}