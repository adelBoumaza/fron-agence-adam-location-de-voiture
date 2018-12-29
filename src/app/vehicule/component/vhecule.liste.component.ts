import { Component, OnInit } from '@angular/core';
import { Assurance } from '../model/assurance.model';
import { Vehicule } from '../model/vehicule.model';
import { VehiculeService } from '../service/vehicule.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-liste-vehicule',
    templateUrl: '../views/vehicule.liste.component.html',
    styleUrls: ['../css/liste.vehicule.component.css', '../../../assets/scss/style.scss',
        '../../../assets/css/font-awesome.min.css']
})
export class VehiculeListeComponent implements OnInit {

    ICON_CARS = '../../../assets/icon/icon-car.png';
    vehicules: any;
    totalCars: number;
    title: string = 'Total vehicules';
    label: string = 'Rechercher une voiture';
    placeholder: string = 'Rechercher par modéle ...';
    filterQuery;
    titleHeaderPart: string = 'Liste des vehicules';

    constructor(private _vehiculeService: VehiculeService,
        private _routing: Router,
        private _route: ActivatedRoute) {
        this._vehiculeService.vehiculeObject = null;
    }


    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.vehicules = this._route.snapshot.data['listeVehicule'];
        this.totalCars = this.vehicules.length;
    }

    findOneVehicule(item) {
        this._vehiculeService.vehiculeObject = item;
        this._routing.navigate(['vehicule']);
    }

    onValueInParentComponentChanged(event) {
        this.filterQuery = event;
    }


}
