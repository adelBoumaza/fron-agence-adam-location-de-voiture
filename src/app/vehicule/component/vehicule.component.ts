import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { UtilitaireService } from '../../common/util/utilitaire';
import { Assurance } from '../model/assurance.model';
import { Vehicule } from '../model/vehicule.model';
import { VehiculeService } from '../service/vehicule.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vehicule',
  templateUrl: '../views/vehicule.component.html',
  styleUrls: ['../css/vehicule.component.css',
  '../../../assets/scss/style.scss',
  '../../../assets/css/font-awesome.min.css']
})
export class VehiculeComponent implements OnInit {

  tabMarque:any;

  //assurance
  assurance : Assurance;
  vehicule : Vehicule = {} as Vehicule;
  btnSave : boolean;
  listeAssurance : Array<Assurance>;
  // param
  success : string;
  existError:boolean;
  existSuccess : boolean;
  ICON_ERROR = '../../../assets/icon/error.png';
  ICON_SUCCESS = '../../../assets/icon/correct.png';
  chargement = '../../../assets/icon/chargement.gif';
  confirmChargement:boolean = false;

   // modal
   closeResult: string;
   confirmAddAssurance :boolean;

   ICON_ASSURANCE_PATH = '../../../assets/icon/icon-car-insurance.png';

  constructor(private modalService: NgbModal,private _router:Router,
              private vehiculeService:VehiculeService,
              private utilitaireService:UtilitaireService,
              private utiltaireService : UtilitaireService,
              private vcRef: ViewContainerRef, 
              private cpService: ColorPickerService) 
              { 
                this.btnSave = true;
                if(vehiculeService.vehiculeObject != null)
                {
                  this.btnSave = false;
                  this.vehicule = vehiculeService.vehiculeObject;
                  this.vehicule.idUser = localStorage.getItem('id');
                  this.resetAssurance();
                  this.findAllAssuranceByVehicule(this.vehicule.id);
                }
                
              }

  ngOnInit() 
  {
    this.existError = false;
    this.existSuccess = false;
    this.tabMarque = this.utilitaireService.getMarques();
    if(this.btnSave)
    {
      this.resetAll();
    }
  }

  findAllAssuranceByVehicule(id)
  {
    this.vehiculeService.findAllAssuranceByVehicule(id)
    .subscribe(response =>{
      this.listeAssurance = response;
    },error =>{

    });
    
    
  }


  resetAssurance()
  {
    this.assurance =  new Assurance(0,null,'');
    this.confirmAddAssurance = true;
  
  }

  resetVehicule()
  {
    this.vehicule = {} as Vehicule;
    this.vehicule.energie = 'Essance';
    this.vehicule.anneeFabrication = new Date().getFullYear(); 
    this.vehicule.typeVehicule = 'Touristique';
    this.vehicule.couleur = '#fff';
  }

  resetAll()
  {
    this.resetAssurance();
    this.resetVehicule();
    this.listeAssurance = [];
    this.confirmChargement = false;
  }


  addAssurance()
  {

      if(
          (this.assurance._prixAchat != 0 &&  this.assurance._prixAchat != undefined) &&
          (this.assurance._dateExpiration != '' || this.assurance._dateExpiration != undefined) &&
          (this.assurance._typeAssurance != '' || this.assurance._typeAssurance != undefined)
        )
      {
          let dateExpiration = new Date(this.assurance._dateExpiration);
          let now            = new Date();
          if(dateExpiration.getTime() < now.getTime())
          {
            this.confirmAddAssurance = false;
          }else
          {
            this.listeAssurance.push(new Assurance(
              this.assurance._prixAchat,
              this.utilitaireService.formattedDate(this.assurance._dateExpiration),
              this.assurance._typeAssurance));
              this.resetAssurance();
          }
          
      }
      else
      {
        this.confirmAddAssurance = false;
      }
       
  }

  deleteAssurance(item)
  {
    this.listeAssurance.splice(item, 1);
  }

  addVehicule()
  {
    this.confirmChargement = true;
    this.vehicule.idUser = localStorage.getItem('id');
    this.vehicule.listeAssuranceDto = new Array<Assurance>()
    this.listeAssurance.forEach(obj =>{
         this.vehicule.listeAssuranceDto.push(obj);
    });
   
   if(this.vehicule.listeAssuranceDto.length == 0)
   {
      this.existError = true;
      this.success = 'Assurance est obligatoire *';
      window.scrollTo(0, 0); 
      this.confirmChargement = false;
   }else
   {
      this.vehiculeService.addVehicule(this.vehicule,this.btnSave)
      .subscribe(response =>
      {
        this.confirmChargement = false;
        this.existError = false;
        this.existSuccess = true;
        this.success = 'le vehicule à bien été créér avec success';
        if(!this.btnSave)
        {
          this.success = 'le vehicule à bien été modifié avec success';
          setTimeout(() => {
            console.log('redirect ....');
            this._router.navigateByUrl('liste-vehicule');
          }, 1000);
        }
        this.resetAll();
      },error =>
      {
      this.existError = true;
      this.existSuccess = false;
      this.confirmChargement = false;
      if(error.status == '417')
      {
          this.success = error.error.message;
      }else
      {
        this.success = 'Une erreur est survenue lors de la tentative de traitement de votre demande (-_-) !';
      }
      });
      window.scrollTo(0, 0); 
   }

   
  }

  redirectToPageListeVehicule()
  {
    this._router.navigateByUrl('liste-vehicule');
  }

  //modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.resetAssurance();
  }

  private getDismissReason(reason: any): string {
    this.resetAssurance();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
    
  }

  choiseMarque(marque)
  {
    switch (marque) {
      case 1:
        this.vehicule.marque = "PEUGEOT";
        break;
      case 2:
        this.vehicule.marque = "RENAULT";
        break;
      case 3:
        this.vehicule.marque = "OPEL";
        break;
      case 4:
        this.vehicule.marque = "CITROEN";
        break;
      case 5:
        this.vehicule.marque = "BMW";
        break;
      case 6:
        this.vehicule.marque = "ALFA ROMEO";
        break;
      case 7:
        this.vehicule.marque = "AUDI";
        break;
      case 8:
        this.vehicule.marque = "CHEVROLET";
        break;
      default:
        confirm("Stp, Veuillez selectionné une marque!");
    }
  }

  public onChangeColor(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);
    const rgba = this.cpService.hsvaToRgba(hsva);
    this.vehicule.couleur = color;
    return this.cpService.rgbaToCmyk(rgba);
  }


  

  

}

/**
 * this.vehiculeService.addVehicule(this.vehicule,this.btnSave)
        .subscribe(response =>
        {
          resetVehicule();
        },error =>
        {

        });
 */
