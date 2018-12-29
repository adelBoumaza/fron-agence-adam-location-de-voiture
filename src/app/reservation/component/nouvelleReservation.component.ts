import { Component, OnInit } from '@angular/core';
import { CustomDatepickerI18n } from '../../common/customDate/customDatepicker';
import {
    NgbDatepickerI18n, NgbDateStruct, NgbCalendar, NgbDatepickerConfig,
    NgbModal, ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import { I18n } from '../../common/customDate/I18n';
import { NouvelleReservationService } from '../service/nouvelleReservation.service';
import { UtilitaireService } from '../../common/util/utilitaire';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { Reservation } from '../model/reservation.model';
import { ClientService } from '../../client/service/client.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nouvelleReservation',
    templateUrl: '../views/nouvelleReservation.component.html',
    styleUrls: ['../css/nouvelleReservation.component.css', '../../../assets/scss/style.scss',
        '../../../assets/css/font-awesome.min.css'],
    providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider
})
export class NouvelleReservationComponent implements OnInit {
    reservation: Reservation;
    ICON_RESERVATION_PATH = '../../../assets/icon/icon-booking.png';
    ICON_CAR_PATH = '../../../assets/icon/icon-car.png';
    ICON_CLIENT_INFO = '../../../assets/icon/client-information.png';
    ICON_CALENDAR_PATH = '../../../assets/icon/calendar.png';
    ICON_HEURE_PATH = '../../../assets/icon/wall-clock.png';
    ICON_CONFIRM_LOCATION = '../../../assets/icon/close-circular.png';
    listeReservation = undefined;
    listeMonths;
    listeYears;
    month: number;
    year: number;
    monthInstring: string;
    days;
    description;
    ICON_DATE_URL = '../../../assets/icon/date.png';
    ICON_CALENDAR = '../../../assets/icon/calendar-icon.png';
    confirm: boolean;
    listeClient: any;
    messageErros: string;
    existeError: boolean;
    existSuccess: boolean;
    ICON_ERROR = '../../../assets/icon/error.png';
    ICON_SUCCESS = '../../../assets/icon/correct.png';
    closeResult: string;
    confirmOpenV = false;
    informationReservation: Array<any>;
    filterQuery: string;
    ICON_CAR_PATH_RENAULT = '../../../assets/icon/icon-marque/icon-renault.png';
    ICON_CAR_PATH_PEUGEOT = '../../../assets/icon/icon-marque/Icon_Peugeot.png';
    ICON_CAR_PATH_CITROEN = '../../../assets/icon/icon-marque/icon-Citroen.png';
    ICON_CAR_PATH_KIA = '../../../assets/icon/icon-marque/icon-kia.png';
    voiture: {};
    btnSave: boolean = true;
    dateDepart: NgbDateStruct;
    dateRetour: NgbDateStruct;
    nouveauClient;
    titleHeaderPart: string = 'Créer une nouvelle réservation';
    constructor
        (
        private config: NgbDatepickerConfig,
        private utilitaireService: UtilitaireService,
        private calendar: NgbCalendar,
        private nouvelleReservationService: NouvelleReservationService,
        private clientService: ClientService,
        private modalService: NgbModal,
        private _router: Router
        ) {
        this.dateDepart = calendar.getToday();
        this.reset();
    }

    ngOnInit(): void {
        this.listeMonths = [{ mois: 'Janvier', value: 1 }, { mois: 'Fevrier', value: 2 }, { mois: 'Mars', value: 3 },
        { mois: 'Avril', value: 4 }, { mois: 'Mai', value: 5 }, { mois: 'Juin', value: 6 },
        { mois: 'Juillet', value: 7 }, { mois: 'Août', value: 8 }, { mois: 'Septembre', value: 9 },
        { mois: 'Octobre', value: 10 }, { mois: 'Novembre', value: 11 }, { mois: 'Décembre', value: 12 }
        ];
        this.listeYears = [new Date().getFullYear(), (new Date().getFullYear()) - 1, (new Date().getFullYear()) - 2, (new Date().getFullYear()) - 3];
        this.month = new Date().getMonth() + 1;
        this.year = new Date().getFullYear();
        this.findAllReservationByMonthAndYear();
        this.clientService.findAllClient()
            .subscribe(response => {
                this.listeClient = response;
            }, error => {
                throw error;
            });
        localStorage.removeItem('Location');

    }
    findAllReservationByMonthAndYear() {
        this.nouvelleReservationService.findAllReservation(this.month, this.year)
            .subscribe(response => {
                this.listeReservation = response;
                this.days = response[0].days;
                this.listeReservation.forEach(element => {
                    console.log(element);
                });
            }, error => {
                throw error;
            });
        this.confirm = false;

    }
    initMessageErrors() {
        this.existeError = false;
        this.existSuccess = false;
        this.messageErros = '';
    }
    choseDays(item, d) {
        this.initMessageErrors();
        // si la voiture est dispo ou le dernier jour de la reservation;
        if (d.dispo || d.finReservation) {
            this.dateRetour = undefined;
            let mois = null;
            let jour = null;
            let dd = null;
            jour = d.jour <= 9 ? '0' + d.jour : d.jour;
            mois = this.month <= 9 ? '0' + this.month : this.month;
            dd = this.year + '/' + mois + '/' + jour;
            this.dateDepart = new NgbDate(this.year, this.month, d.jour);
            this.description = item;
            this.monthInstring = this.utilitaireService.convertMonthToString(this.month);
            this.displayCarSelected(item);
        } else {
            console.log(d);
        }

        this.btnSave = true;

    }

    displayCarSelected(item) {
        this.description.marque = item.marque;
        this.description.immatricule = item.immatricule;
        this.description.modele = item.modele;
        this.description.prixLocation = item.prixLocation;
        this.description.kmActuelle = item.kmActuelle;
        this.description.dateDepart = this.dateDepart;
        this.description.dateRetour = this.dateRetour;
        this.description.idVoiture = item.idVoiture;
        this.description.idClient = null;
        this.description.reservationEnAttente = false;
        this.confirm = true;

    }
    choseDateRetour() {
        this.dateRetour = new NgbDate(this.dateDepart.year, this.dateDepart.month, this.dateDepart.day);
        this.description.dateRetour = this.dateRetour;
        // this.config.minDate = this.dateDepart;
        this.description.prixTTC = this.description.prixLocation;
        this.description.versement = 0;
        this.description.nbrJours = 1;
        this.description.heureDepart = '10:00';
        this.description.heureRetour = '10:00';
    }
    onDateRetourSelect(event) {
        this.dateRetour = new NgbDate(event.year, event.month, event.day);
        this.description.dateRetour = event.year + '/' + event.month + '/' + event.day;
        const dd = new NgbDate(this.dateDepart.year, this.dateDepart.month, this.dateDepart.day).toString();
        const dr = new NgbDate(this.dateRetour.year, this.dateRetour.month, this.dateRetour.day).toString();
        const diff = Date.parse(dr) - Date.parse(dd);
        const diffIndays = diff / (1000 * 60 * 60 * 24);
        if (diffIndays === 0) {
            this.description.nbrJours = 1;
            this.description.prixTTC = this.description.prixLocation;
        } else {
            this.description.nbrJours = Math.round(diffIndays);
            this.description.prixTTC = this.description.prixLocation * (this.description.nbrJours);
        }
    }

    onDateDepartSelect(event) {
        this.dateDepart = new NgbDate(event.year, event.month, event.day);
        this.description.dateDepart = event.year + '/' + event.month + '/' + event.day;
        const dd = new NgbDate(this.dateDepart.year, this.dateDepart.month, this.dateDepart.day).toString();
        const dr = new NgbDate(this.dateRetour.year, this.dateRetour.month, this.dateRetour.day).toString();
        const diff = Date.parse(dr) - Date.parse(dd);
        const diffIndays = diff / (1000 * 60 * 60 * 24);
        if (diffIndays === 0) {
            this.description.nbrJours = 1;
            this.description.prixTTC = this.description.prixLocation;
        } else {
            this.description.nbrJours = Math.round(diffIndays);
            this.description.prixTTC = this.description.prixLocation * (this.description.nbrJours);
        }
    }



    submitForm() {
        this.initMessageErrors();
        this.doReservation();

        const dd = new NgbDate(this.dateDepart.year, this.dateDepart.month, this.dateDepart.day).toString();
        const dr = new NgbDate(this.dateRetour.year, this.dateRetour.month, this.dateRetour.day).toString();
        const diff = Date.parse(dr) - Date.parse(dd);
        if (diff < 0) {
            this.existeError = true;
            this.messageErros = 'La date de retour ne pêut pas être inférieur à la date de Départ*';
        }
        else if (this.reservation.idClient == null && !this.reservation.nouveauClient) {
            this.existeError = true;
            this.messageErros = 'Veuillez sélectionnez un client *';
        }
        else if (this.reservation.nouveauClient) {
            if (this.reservation.nom === '' || this.reservation.nom === undefined) {
                this.messageErros = 'le nom est obligatoire *';
                this.existeError = true;
            }
            else if (this.reservation.prenom === '' || this.reservation.prenom === undefined) {
                this.messageErros = 'le prénom est obligatoire *';
                this.existeError = true;
            }
            else if (this.reservation.tel === '' || this.reservation.tel === undefined) {
                this.messageErros = 'le tél est obligatoire *';
                this.existeError = true;
            }
        }
        //si c'est une edition
        if (!this.btnSave) {
            this.reservation.id = this.description.idReservation;
        }
        if (!this.existeError) {

            this.reservation.dateDeDepart = this.utilitaireService.formattedDateStruct(this.dateDepart);
            this.reservation.dateDeRetour = this.utilitaireService.formattedDateStruct(this.dateRetour);
            this.nouvelleReservationService.saveReservation(this.reservation, this.btnSave)
                .subscribe(response => {

                    this.existSuccess = true;
                    setTimeout(() => {
                        this.existSuccess = false;
                    }, 1500);


                    this.messageErros = this.btnSave ?
                        'La réservation a bien été enregistré (^_^)'
                        : 'La réservation a bien été modifiée (^_^)';
                    this.findAllReservationByMonthAndYear();
                    this.reset();
                    window.scrollTo(0, 0);
                }, error => {
                    this.existeError = true;
                    if (error.status === 417) {
                        this.messageErros = error.error.message;
                    } else {
                        this.messageErros = 'Une erreur est survenue lors de la tentative de traitement de votre demande (-_-) !';
                        throw error;
                    }
                })
        }
    }



    doReservation() {

        this.reservation.dateDeDepart = this.description.dateDepart;
        this.reservation.dateDeRetour = this.description.dateRetour;
        this.reservation.nombreDeJours = this.description.nbrJours;
        this.reservation.totalTTC = this.description.prixTTC;
        this.reservation.actived = true;
        this.reservation.nouveauClient = this.description.nouveauClient;
        this.reservation.idVoiture = this.description.idVoiture;
        this.reservation.idClient = this.description.idClient;
        this.reservation.nom = this.description.nom;
        this.reservation.prenom = this.description.prenom;
        this.reservation.mail = this.description.mail;
        this.reservation.tel = this.description.tel;
        this.reservation.reservationEnAttente = this.description.reservationEnAttente;
        this.reservation.versement = this.description.versement;
        this.reservation.id = null;
        this.reservation.heureDepart = this.description.heureDepart;
        this.reservation.heureRetour = this.description.heureRetour;
        if (this.reservation.nouveauClient == undefined) {
            this.reservation.nouveauClient = false;
        }
    }

    reset() {
        this.reservation = {} as Reservation;
        this.description = { modele: '', marque: '', immatricule: '', prixLocation: 0, kmActuelle: 0, dateDepart: '', dateRetour: '', prixTTC: 0, versement: 0, nbrJours: 1, nom: '', prenom: '', tel: '', mail: '', reservationEnAttente: false, idClient: null, idVoiture: null, nouveauClient: false, heureDepart: '', heureRetour: '' };
        this.dateRetour = undefined;
        this.btnSave = true;

    }

    displayInformationByVoiture(item) {
        console.log('displayInformationByVoiture : ' + item);
        let idReservation = null;
        this.informationReservation = new Array();
        item.days.forEach(element => {

            if (element.idReservation != null) {
                if (idReservation != element.idReservation) {
                    this.informationReservation.push(element);
                }
            }
            idReservation = element.idReservation;
        });
        this.filterQuery = '';

        this.voiture = { marque: item.marque, model: item.modele, kmActuel: item.kmActuelle, immatricule: item.immatricule };
    }

    // open Modal
    // modal
    open(content) {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
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
    // open modal confirmation annulation reservation
    openSm(content) {
        this.modalService.open(content, { size: 'sm' });
    }

    annulerReservation(item, index) {
        this.nouvelleReservationService.annulerReservation(null, item.idReservation)
            .subscribe(reseponse => {
                this.informationReservation.splice(index, 1);
                this.findAllReservationByMonthAndYear();
            }, error => {

            });

    }

    findOneReservation(item, edit) {
        this.nouvelleReservationService.findOneReservation(item.idReservation)
            .subscribe(response => {
                if (edit) {
                    this.editerReservation(response);
                }
                else {
                    localStorage.setItem('Location', JSON.stringify(response));
                    this._router.navigateByUrl('/location');
                }
            }, error => {
                throw error;
            });
    }

    editerReservation(response) {
        this.reset();
        this.btnSave = false;
        const dateDepart = response.reservationDto.dateDeDepart;
        const dateRetour = response.reservationDto.dateDeRetour;
        const dateDepartSplitted = dateDepart.split('/', 3);
        const dateRetourSplitted = dateRetour.split('/', 3);
        const dateDepartformatted = dateDepartSplitted[2] + '/' + dateDepartSplitted[1] + '/' + dateDepartSplitted[0];
        const dateRetourformatted = dateRetourSplitted[2] + '/' + dateRetourSplitted[1] + '/' + dateRetourSplitted[0];
        this.dateDepart = new NgbDate(parseInt(dateDepartSplitted[2]), parseInt(dateDepartSplitted[1]), parseInt(dateDepartSplitted[0]));
        this.dateRetour = new NgbDate(parseInt(dateRetourSplitted[2]), parseInt(dateRetourSplitted[1]), parseInt(dateRetourSplitted[0]));
        const dd = new NgbDate(this.dateDepart.year, this.dateDepart.month, this.dateDepart.day).toString();
        const dr = new NgbDate(this.dateRetour.year, this.dateRetour.month, this.dateRetour.day).toString();
        const diff = Date.parse(dr) - Date.parse(dd);
        const diffIndays = diff / (1000 * 60 * 60 * 24);
        if (diffIndays == 0) {
            this.description.nbrJours = 1;
            this.description.prixTTC = this.description.prixLocation;
        } else {
            this.description.nbrJours = Math.round(diffIndays);
            this.description.prixTTC = this.description.prixLocation * (this.description.nbrJours);
        }

        this.description = {
            modele: response.voitureDto.modele, marque: response.voitureDto.marque,
            immatricule: response.voitureDto.immatricule,
            prixLocation: response.voitureDto.prixLocation,
            kmActuelle: response.voitureDto.kilommetrage,
            dateDepart: dateDepartformatted,
            dateRetour: dateRetourformatted,
            prixTTC: response.reservationDto.totalTTC,
            versement: response.reservationDto.versement,
            nbrJours: response.reservationDto.nombreDeJours,
            nom: '', prenom: '', tel: '', mail: '',
            reservationEnAttente: response.reservationDto.reservationEnAttente,
            idClient: response.clientDto.id, idVoiture: response.voitureDto.id,
            nouveauClient: false, heureDepart: response.reservationDto.heureDepart,
            heureRetour: response.reservationDto.heureRetour, idReservation: response.reservationDto.id
        };
        this.confirm = true;

    }

    verifyNewClient() {
        if (!this.nouveauClient) {
            this.description.nouveauClient = true;
            this.description.idClient = null;
        } else {
            this.description.nouveauClient = false;
            this.description.nom = '';
            this.description.prenom = '';
            this.description.mail = '';
            this.description.tel = '';
        }
    }


}
