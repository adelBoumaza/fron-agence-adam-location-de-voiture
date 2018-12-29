import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LocationModel } from './Location.model';
import { LocationService } from './service/location.service';
import { Constant } from '../common/util/constants';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css',
    '../../assets/scss/style.scss',
    '../../assets/css/font-awesome.min.css']
})
export class LocationComponent implements OnInit {

  location: LocationModel = {} as LocationModel;
  locationObject: any;
  errors: boolean;
  messageError: string;
  closeResult: string;
  confirmOpenV = false;
  ListeStatut = [Constant.STATUT_PAYE, Constant.STATUT_PARTIELLEMENT_PAYE, Constant.STATUT_NON_PAYE];
  dateExpirationAssurance: any;
  titleHeaderPart: string = 'Créer une nouvelle location';

  @ViewChild('saveLocationForm') locationForm: NgForm;

  constructor(private _route: Router,
    private locationService: LocationService,
    private modalService: NgbModal) {
    this.init();

  }

  ngOnInit() {
  }

  init() {
    this.locationObject = JSON.parse(localStorage.getItem('Location'));
    if (this.locationObject !== null && this.locationObject !== undefined) {
      this.reset();
      this.dateExpirationAssurance = this.locationObject.dateExpirationAssurance;
      this.location.idClient = this.locationObject.clientDto.id;
      this.location.idVoiture = this.locationObject.voitureDto.id;
      this.location.idReservation = this.locationObject.reservationDto.id;
      this.location.immatricule = this.locationObject.voitureDto.immatricule;
      this.location.heureDepart = this.locationObject.reservationDto.heureDepart;
      this.location.heureRetour = this.locationObject.reservationDto.heureRetour;
      this.location.nomClient = this.locationObject.clientDto.nom;
      this.location.prenomClient = this.locationObject.clientDto.prenom;
      this.location.numeroPasseport = this.locationObject.clientDto.numeroPasseport;
      this.location.numeroPermis = this.locationObject.clientDto.numeroDePermis;
      this.location.adresse = this.locationObject.clientDto.adresse;
      this.location.tel = this.locationObject.clientDto.numeTelOne;
      this.location.kmActuel = this.locationObject.voitureDto.kilommetrage;
      this.location.carburantActuel = this.locationObject.voitureDto.carburantActuel;
      this.location.caution = 'Chéque';
      this.location.montant = 20000;
      this.location.remise = 0;
      this.location.versement = this.locationObject.reservationDto.versement;
      this.location.nombreDeJours = this.locationObject.reservationDto.nombreDeJours;
      this.location.prixUnitaire = this.locationObject.voitureDto.prixLocation;
      this.location.totalTTC = Number((this.locationObject.reservationDto.totalTTC).toFixed(2));
      this.location.totalHT = Number((this.location.totalTTC / 1.2).toFixed(2));
      this.location.resteApaye = Number((this.location.totalTTC - this.location.versement).toFixed());
      this.definirStatutLocation(this.location.resteApaye);

    }
  }

  reset() {
    this.messageError = '';
    this.errors = false;
  }

  definirStatutLocation(item) {
    if (parseInt(item) == 0) {
      this.location.statut = Constant.STATUT_PAYE;
    }
    else if (((item) > 0) && ((item) < (this.location.totalTTC))) {
      this.location.statut = Constant.STATUT_PARTIELLEMENT_PAYE;
    }
    else {
      this.location.statut = Constant.STATUT_NON_PAYE;
    }
  }

  calculateTotalTTC() {
    this.location.totalTTC = Number((this.location.prixUnitaire * this.location.nombreDeJours).toFixed(2));
  }
  calculateTotalHT() {
    this.location.totalHT = Number((this.location.totalTTC / 1.2).toFixed(2));
  }

  onChangePrixUnitaire() {
    this.calculateTotalTTC();
    this.calculateTotalHT();
    const total = (this.location.versement) + (this.location.remise);
    this.location.resteApaye = this.location.totalTTC - total;
  }

  onChangeRemise() {
    if (this.location.remise != null && typeof this.location.remise !== 'string') {
      this.calculate();
    } else {
      this.location.remise = 0;
      this.calculate();
    }

  }

  onChangeVersement() {
    if (this.location.versement != null && typeof this.location.versement !== 'string') {
      this.calculate();
    } else {
      this.location.versement = this.locationObject.reservationDto.versement;
      this.calculate();
    }

  }

  calculate() {
    this.onChangePrixUnitaire();
    const total = (this.location.versement) + (this.location.remise);
    this.location.resteApaye = this.location.totalTTC - total;
    this.definirStatutLocation(this.location.resteApaye);
  }

  saveLocation() {
    this.reset();
    if (this.location.resteApaye < 0) {
      this.errors = true;
      this.messageError = 'Le reste à payé ne peût pas être supérieur au total de la location : ' + this.location.totalTTC;
    }
    if (!this.errors) {

      this.locationService.saveOrUpdateLocation(this.location, true)
        .subscribe(response => {
          this.retourToReservation();
        }, error => {
          throw error;
        });
    }


  }

  // open Modal
  // modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.confirmOpenV = false;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  retourToReservation() {
    this._route.navigateByUrl('nouvelle-reservation');
  }


}
