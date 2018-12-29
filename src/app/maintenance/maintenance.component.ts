import { Component, OnInit } from '@angular/core';
import { UtilitaireService } from '../common/util/utilitaire';
import { MaintenanceService } from './maintenance.service';
import { Maintenance } from './model/maintenance.model';
import { MaintenanceSearch } from './model/maintenanceSearch.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MaintenanceSearchListe } from './model/maintenanceSearchListe.model';
import { VehiculeService } from '../vehicule/service/vehicule.service';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.css', '../../assets/scss/style.scss',
        '../../assets/css/font-awesome.min.css']
})
export class MaintenanceComponent implements OnInit {

    maintenance: Maintenance;
    listeVoiture: Array<any>;
    listeVoitureForm: Array<any>;
    maintenanceSearchListe: MaintenanceSearchListe;
    maintenanceSearch: MaintenanceSearch;
    maintenances: Array<MaintenanceSearch>;
    marqueSelected: string;
    dateExpirationAssurance: string;
    kmActuel: number;
    ICON_ERROR = '../../assets/icon/error.png';
    ICON_SUCCESS = '../../assets/icon/correct.png';
    chargement = '../../assets/icon/chargement.gif';
    error;
    success;
    exception;
    validatorDate: string;
    existError: boolean;
    existSuccess: boolean;
    confirmChargement: boolean;
    titleHeaderPart: string = 'Maintenance de vhéicule';

    constructor(private utilitaireService: UtilitaireService,
        private vehiculeService: VehiculeService,
        private maintenanceService: MaintenanceService) { }

    ICON_MAINTENANCE_PATH = '../../assets/icon/maintenance.png';
    maintenanceArray = ['Vidange', 'Filtre à air', 'Filtre à huile', 'Filtre à gasoil',
        'Bougies allumage', 'Kit de distribution', 'Kit d\'embrayage', 'Suspensions',
        'Plaquettes', 'Pneus', 'Roulements', 'Rotules', 'Autres'];
    tabMarques: any;
    btnSave: boolean;


    ngOnInit() {
        this.reset();
        this.tabMarques = this.utilitaireService.getMarques();
    }

    loadVoitureByMarque(filter) {
        if (filter) {
            this.vehiculeService.findAllVehiculeByMarque(this.maintenanceSearchListe.marque)
                .subscribe(response => {
                    this.listeVoiture = response;
                }, error => {
                    throw error;
                });
            this.onChange();
        }
        else {
            this.exception = undefined;
            this.dateExpirationAssurance = undefined;
            this.vehiculeService.findAllVehiculeByMarque(this.marqueSelected)
                .subscribe(response => {
                    this.listeVoitureForm = response;
                }, error => {
                    throw error;
                });
        }
    }


    reset() {
        this.maintenanceSearchListe = {} as MaintenanceSearchListe;
        this.maintenance = {} as Maintenance;
        this.maintenances = new Array();
        this.btnSave = true;
        this.marqueSelected = null;
        this.exception = undefined;
        this.dateExpirationAssurance = undefined;
        this.validatorDate = undefined;
        this.existSuccess = false;
        this.existError = false;
        this.confirmChargement = false;
        this.listeVoitureForm = new Array();
        this.kmActuel = 0;
    }

    onChange() {
        this.maintenances = new Array();
        this.maintenanceService.findAllMaintenance(this.maintenanceSearchListe)
            .subscribe(data => {
                console.log('test ' + data);
                data.forEach(element => {
                    this.maintenanceSearch = {} as MaintenanceSearch;
                    this.maintenanceSearch.id = element[0];
                    this.maintenanceSearch.kmRevision = element[1];
                    this.maintenanceSearch.prixIntervention = element[2];
                    this.maintenanceSearch.typeRevision = element[3];
                    this.maintenanceSearch.dateIntervention = element[4];
                    this.maintenanceSearch.idVoiture = element[5];
                    this.maintenanceSearch.marque = element[6];
                    this.maintenanceSearch.modele = element[7];
                    this.maintenanceSearch.kmActuelle = element[8];
                    this.maintenanceSearch.restArouler = element[9];
                    this.maintenances.push(this.maintenanceSearch);
                });
            }, error => {
                throw error;
            });
    }

    findLastAssuranceByVoiture() {
        this.dateExpirationAssurance = '';
        this.exception = '';
        this.error = '';
        this.kmActuel = undefined;
        this.vehiculeService.findLastAssuranceByVoiture(this.maintenance.idVoiture)
            .subscribe(response => {
                console.log('date : ' + response[0][0]);
                this.dateExpirationAssurance = response[0][0];
                this.kmActuel = response[0][1];
            }, error => {
                if (error.status === 417) {
                    this.exception = error.error.message;
                } else {
                    this.success = 'Une erreur est survenue lors de la tentative de traitement de votre demande (-_-) !';
                    throw error;
                }
            });
    }

    submitForm() {
        if (this.maintenance.dateIntervention === undefined) {
            this.validatorDate = 'Le format de la date n\'est pas compatible';
        }
        else if (new Date(this.maintenance.dateIntervention) > new Date()) {
            this.validatorDate = 'la date ne peut pas être supèrieur à aujourd\'hui';
        }
        else {
            this.maintenance.dateIntervention = this.utilitaireService.formattedDate(this.maintenance.dateIntervention);
            this.confirmChargement = true;
            this.saveOrUpdateFicheTechnique();
            setTimeout(() => {
                this.reset();
            }, 2000);
            window.scrollTo(0, 0);
        }
    }

    saveOrUpdateFicheTechnique() {
        console.log(this.btnSave);
        this.maintenanceService.saveOrUpdateFicheTechnique(this.maintenance, this.btnSave)
            .subscribe(response => {
                this.existSuccess = true;
                this.existError = false;
                if (this.btnSave) {
                    console.log('save' + this.btnSave);
                    this.success = 'la fiche maintenance à bien été enregistré';
                }
                else {
                    console.log('modif' + this.btnSave);
                    this.success = 'la fiche maintenance à bien été modifié';
                }
            }, error => {
                this.existError = true;
                this.existSuccess = false;
                this.success = 'Une erreur est survenue lors de la tentative de traitement de votre demande (-_-) !';
                throw error;
            });

    }

    findOne(item) {
        this.btnSave = false;
        this.maintenance = {} as Maintenance;
        this.maintenance = item;
        window.scrollTo(0, 0);
    }




}
