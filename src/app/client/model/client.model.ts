export interface Client
{
	id : number;
	nom: string  ;
	prenom: string  ;
    dateDeNaissance: string  ;
    lieuDeNaissance: string  ;
	adresse : string  ;
	email : string  ;
    numeTelOne: string  ;
    numTelTwo: string  ;
	typeClient : boolean;
    numeroDePermis: string  ;
	numeroPasseport: string;
	dateObtentionPermis: string  ;
	dateObtentionPassport: string  ;
	lieuObtentionPermis: string  ;
	lieuObtentionPasseport: string  ;
	observation : string  ;
	note :number;
	actived : boolean;
	endette : boolean;
	sommeDette : number;
	clientBloque : boolean;
	idUser : number ;
}