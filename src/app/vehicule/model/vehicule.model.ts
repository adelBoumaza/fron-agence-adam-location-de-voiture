import { Assurance } from "./assurance.model";

export interface Vehicule{
     id : number;
	 marque : string;
	 modele : string;
	 typeVehicule : string;
	 immatricule : string;
	 prixAchat : number;
	 couleur : string;
	 kilommetrage : number;
	 carburantActuel : string;
	 prixLocation : number;
	 roueDeSecours : boolean;
	 anneeFabrication : number;
	 observation : string;
	 energie : string;
	 idUser : any;
	 listeAssuranceDto : Array<Assurance>;
}