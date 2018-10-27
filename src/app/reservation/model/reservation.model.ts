export interface Reservation{
    id : number;
	nouveauClient:boolean;
	actived : boolean;
	dateDeDepart : string;
	dateDeRetour : string;
	nombreDeJours : number;
	totalTTC : number ;
	versement : number ;
	reservationEnAttente : boolean;
	idClient : number;
	idVoiture : number;
	nom : string;
	prenom : string;
	tel : string;
	mail : string;
	heureDepart:string;
	heureRetour:string;
}