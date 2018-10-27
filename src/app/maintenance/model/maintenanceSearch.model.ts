import { Maintenance } from "./maintenance.model";

export interface MaintenanceSearch extends Maintenance{

    typeRevision : string;
    marque : string;
    modele: string;
    kmActuelle : number;
    restArouler : number;
}