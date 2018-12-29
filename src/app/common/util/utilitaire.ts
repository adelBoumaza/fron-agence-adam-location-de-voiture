import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class UtilitaireService {

     capitalizeFirstLetter(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
     outputDateFormatDDMMYYYY(date): string {
        let dateformatted = '';
        const splitted = date.split('/', 3);
        dateformatted = splitted[0] + '-' + splitted[1] + '-' + splitted[2];
        return dateformatted;
    }

     outputDateFormatYYYYMMDD(date): string {
        let dateformatted = '';
        const splitted = date.split('/', 3);
        dateformatted = splitted[2] + '/' + splitted[1] + '/' + splitted[0];
        return dateformatted;
    }

     formattedDate(date): string {
        let dateformatted = '';
        if (date != null && date !== undefined) {
            const splitted = date.split('-', 3);
            dateformatted = splitted[2] + '/' + splitted[1] + '/' + splitted[0];
        }
        return dateformatted;
    }
     formattedDateStruct(calendar: NgbDateStruct): string {
        let mois = null;
        let jour = null;
        let annee = null;
        let dateFormated = null;
        jour = calendar.day <= 9 ? '0' + calendar.day : calendar.day;
        mois = calendar.month <= 9 ? '0' + calendar.month : calendar.month;
        annee = calendar.year;
        return dateFormated = jour + '/' + mois + '/' + annee;
    }

     formatDateMaterial(object): string {
        const date = new Date(object);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }

     getMarques(): any {
        const tabMarque = ['ALEKO'
            , 'ALFA ROMEO'
            , 'ALPINE RENAULT'
            , 'ALPINE RENAULT'
            , 'ARO'
            , 'ASIA'
            , 'ASTON MARTIN'
            , 'AUDI'
            , 'AUSTIN'
            , 'AUTOBIANCHI'
            , 'AUVERLAND'
            , 'BEDFORD'
            , 'BEE BEE AUTOMOT'
            , 'BENTLEY'
            , 'BERTONE'
            , 'BMW'
            , 'BUICK'
            , 'CADILLAC'
            , 'CHEVROLET'
            , 'CHRYSLER'
            , 'CITROEN'
            , 'COURB'
            , 'DACIA'
            , 'DAEWOO'
            , 'DAF'
            , 'DAIHATSU'
            , 'DAIMLER'
            , 'DATSUN'
            , 'DODGE'
            , 'DS'
            , 'EBRO'
            , 'FIAT'
            , 'FISKER'
            , 'FORD'
            , 'FSO-POLSKI'
            , 'GAC GONOW'
            , 'GME'
            , 'GRANDIN'
            , 'HONDA'
            , 'HYUNDAI'
            , 'INFINITI'
            , 'INNOCENTI'
            , 'ISUZU'
            , 'IVECO'
            , 'JAGUAR'
            , 'JEEP'
            , 'KIA'
            , 'LADA'
            , 'LANCIA'
            , 'LAND ROVER'
            , 'LDV'
            , 'LEXUS'
            , 'LOTUS'
            , 'MAHINDRA'
            , 'MAN'
            , 'MARUTI'
            , 'MASERATI'
            , 'MATRA'
            , 'MAZDA'
            , 'MCC'
            , 'MEGA'
            , 'MERCEDES'
            , 'MG'
            , 'MIA'
            , 'MINI'
            , 'MITSUBISHI'
            , 'MPM MOTORS'
            , 'NISSAN'
            , 'OPEL'
            , 'PANHARD'
            , 'PEUGEOT'
            , 'PIAGGIO'
            , 'PONTIAC'
            , 'PORSCHE'
            , 'PROTON'
            , 'RENAULT'
            , 'ROVER'
            , 'SAAB'
            , 'SANTANA'
            , 'SEAT'
            , 'SKODA'
            , 'SMART'
            , 'SSANGYONG'
            , 'SUBARU'
            , 'SUNBEAM'
            , 'SUZUK'
            , 'TALBOT'
            , 'TATA'
            , 'TESLA'
            , 'THINK'
            , 'TOYOTA'
            , 'TRIUMPH'
            , 'UMM'
            , 'VOLKSWAGEN'
            , 'VOLVO'
            , 'ZASTAVA'
            , 'ZAZ'
            , 'Mon véhicule n \'est pas répertorié'];

        return tabMarque;
    }


     convertMonthToString(month): string {
        switch (month) {
            case 1:
                return 'Janvier';
            case 2:
                return 'Février';
            case 3:
                return 'Mars';
            case 4:
                return 'Avril';
            case 5:
                return 'Mai';
            case 6:
                return 'Juin';
            case 7:
                return 'Juillet';
            case 8:
                return 'Août';
            case 9:
                return 'Septembre';
            case 10:
                return 'Octobre';
            case 11:
                return 'Novembre';
            case 12:
                return 'Décembre';
            default:
                confirm('Le mois n \'est pas valide !');
        }
    }
     getMenuRoutes(): any {
        const routes =
            [
                {
                    parent: 'Elements',
                    menu:
                        [
                            {
                                menu_title: 'Configuration',
                                child: [{ label: 'Profile Agence', link: '/profile' }]
                            },
                            {
                                menu_title: 'Clients',
                                child:
                                    [
                                        { label: 'Ajouter un client', link: '/client' },
                                        { label: 'Liste clients', link: '/liste-client' },
                                        { label: 'Clients bloqués', link: '/liste-client' }
                                    ]
                            },
                            {
                                menu_title: 'Véhicules',
                                child:
                                    [
                                        { label: 'Ajouter un véhicule', link: '/vehicule' },
                                        { label: 'liste de véhicule', link: '/liste-vehicule' },
                                        { label: 'Révision des véhicules', link: '/revision' },
                                        { label: 'Maintenance des véhicules', link: '/fiche-maintenance' }
                                    ]
                            },
                        ]
                },
                {
                    parent: 'Planification',
                    menu:
                        [
                            {
                                menu_title: 'Contrats',
                                child:
                                    [
                                        { label: 'Nouvelle réservation', link: '/nouvelle-reservation' },
                                        { label: 'Liste contrats', link: '' },
                                        { label: 'Liste réservation', link: '/reservation' },
                                        { label: 'Dettes', link: '/liste-dettes' }
                                    ]
                            },
                            {
                                menu_title: 'Alerts',
                                child:
                                    [
                                        { label: 'Voir les alerts', link: '' }
                                    ]
                            }
                        ]
                }
            ];
        return routes;
    }
}