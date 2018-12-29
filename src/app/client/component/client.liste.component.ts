import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../service/client.service';


@Component({
    selector: 'app-client-list',
    templateUrl: '../views/client.liste.component.html',
    styleUrls: ['../css/client.liste.component.css', '../../../assets/scss/style.scss',
        '../../../assets/css/font-awesome.min.css'
    ]
})
export class ClientListeComponent implements OnInit {
    clients: any;
    ICON_MONEY = '../../../assets/icon/icon-money.png';
    totalDette: number = 0;
    title: string = 'Total Dettes';
    label: string = 'Rechercher un client';
    placeholder: string = 'Rechercher par Nom ...';
    filterQuery;
    titleHeaderPart: string = 'Liste des clients';

    constructor(private _clientService: ClientService,
        private _routing: Router,
        private _route: ActivatedRoute) {
        this._clientService.clientObject = null;
        // setInterval(() =>{this.test()}, 2000);
    }

    ngOnInit() {
        this.loadData();
    }
    loadData(): any {
        this.clients = this._route.snapshot.data['listeClient'];
        this.calculateDette(this.clients);
        return this.clients;
    }
    calculateDette(data) {
        data.forEach(element => {
            if (element.sommeDette != null) {
                this.totalDette = this.totalDette + element.sommeDette;
            }
        });
    }

    /*test(): any {
        console.log(this.clients);
        return this.clients;
    }*/

findOneClient(item) {
    this._clientService.clientObject = item;
    this._routing.navigate(['client']);
}

onValueInParentComponentChanged(event) {
    this.filterQuery = event;
}

}
