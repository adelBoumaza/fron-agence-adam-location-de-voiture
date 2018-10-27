export interface LocationModel{

    id: number ;
	totalTTC  : number ;
	totalHT  : number ;
	prixUnitaire  : number ;
	nombreDeJours  : number ;
	remise  : number ;
	versement  : number ;
	resteApaye  : number ;
	statut  : string ;
	caution  : string ;
    montant  : number ;
	idReservation : number ;
	heureDepart  : string ;
	heureRetour  : string ;
    idVoiture  : number ;
	immatricule  : string ;
	kmActuel : number;
    carburantActuel  : string ;
    idClient  : number ;
	nomClient  : string ;
	prenomClient  : string ;
	numeroPasseport  : string ;
	numeroPermis  : string ;
	adresse  : string ;
	tel  : string ;
}