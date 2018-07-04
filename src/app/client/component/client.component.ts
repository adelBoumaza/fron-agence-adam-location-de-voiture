import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../model/client.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilitaireService } from '../../common/util/utilitaire';



@Component({
  selector: 'app-client',
  templateUrl: '../views/client.component.html',
  styleUrls: ['../css/client.component.css',
              '../../../assets/scss/style.scss',
              '../../../assets/css/font-awesome.min.css'
  ]
})
export class ClientComponent  implements OnInit {

  client : Client = {} as Client;
  settingsForm: FormGroup;
  success : string;
  existError:boolean;
  chargement = '../../../assets/icon/chargement.gif';
  confirmChargement:boolean = false;
  btnSave :boolean;
  rateNote :number = 0;
  
  constructor(private _clientService:ClientService,
              private utilitaireService:UtilitaireService,
              private _router: Router,
              private fb: FormBuilder)
  {
     // create form group using the form builder
    this.initModel(fb);
    this.btnSave = true;
    if(_clientService.clientObject != null)
    {
      this.btnSave = false;
      this.client = _clientService.clientObject;
      this.rateNote = this.client.note;
      this.settingsForm.setValue({
          nom: this.client.nom  ,
          prenom: this.client.prenom ,
          dateDeNaissance: this.client.dateDeNaissance ,
          lieuDeNaissance : this.client.lieuDeNaissance,
          adresse : this.client.adresse ,
          email : this.client.email  ,
          numeTelOne: this.client.numeTelOne ,
          numTelTwo: this.client.numTelTwo ,
          typeClient : this.client.typeClient,
          numeroDePermis: this.client.numeroDePermis  ,
          numeroPasseport: this.client.numeroPasseport,
          dateObtentionPermis: this.client.dateObtentionPermis ,
          dateObtentionPassport: this.client.dateObtentionPassport  ,
          lieuObtentionPermis:this.client.lieuObtentionPermis ,
          lieuObtentionPasseport: this.client.lieuObtentionPasseport  ,
          observation : this.client.observation ,
          note :this.client.note,
          actived : this.client.actived,
          endette : this.client.endette,
          sommeDette : this.client.sommeDette,
          clientBloque : this.client.clientBloque,
          idUser : localStorage.getItem('id') 
      });
      
    }
   
  }

  initModel(fb: FormBuilder)
  {
    this.settingsForm = this.fb.group({
        nom: ''  ,
        prenom: ''  ,
        dateDeNaissance: ''  ,
        lieuDeNaissance : '',
        adresse : ''  ,
        email : ''  ,
        numeTelOne: ''  ,
        numTelTwo: ''  ,
        typeClient : true,
        numeroDePermis: ''  ,
        numeroPasseport: '',
        dateObtentionPermis: new Date() ,
        dateObtentionPassport: new Date()  ,
        lieuObtentionPermis: ''  ,
        lieuObtentionPasseport: ''  ,
        observation : ''  ,
        note :0,
        actived : true,
        endette : false,
        sommeDette : 0,
        clientBloque : false,
        idUser : localStorage.getItem('id') 
     });
  }

  init():void{
    this.confirmChargement = false;
    this.existError = false;
  }
  ngOnInit() {
    Object.assign(this.client);
    this.init();
    
  }
  reset()
  {
    this.settingsForm.reset({
        nom: ''  ,
        prenom: ''  ,
        dateDeNaissance: ''  ,
        lieuDeNaissance : '',
        adresse : ''  ,
        email : ''  ,
        numeTelOne: ''  ,
        numTelTwo: ''  ,
        typeClient : true,
        numeroDePermis: ''  ,
        numeroPasseport: '',
        dateObtentionPermis: new Date() ,
        dateObtentionPassport: new Date()  ,
        lieuObtentionPermis: ''  ,
        lieuObtentionPasseport: ''  ,
        observation : ''  ,
        note :0,
        actived : true,
        endette : false,
        sommeDette : 0,
        clientBloque : false,
        idUser : localStorage.getItem('id') 
    });
    this.confirmChargement = false;
  }

  submitForm()
  {
      this.confirmChargement = true;
      // update the model
      this.updateModel(this.settingsForm.value);
      this.client.dateDeNaissance       = this.utilitaireService.formattedDate(this.client.dateDeNaissance);
      this.client.dateObtentionPassport = this.utilitaireService.formattedDate(this.client.dateObtentionPassport);
      this.client.dateObtentionPermis   = this.utilitaireService.formattedDate(this.client.dateObtentionPermis);
      //verify form save or update 
      if(!this.btnSave && this._clientService.clientObject != null)
      {
         this.client.id   = this._clientService.clientObject.id;
         this.client.note = this.rateNote;
      }
      //call service for save client
     this._clientService.saveClient(this.client,this.btnSave)
      .subscribe(response =>
      {
            this.success = 'le client à bien été criéé avec success';
            this.reset();
            if(!this.btnSave)
            {
              this.success = 'le client à bien été modifié avec success';
              setTimeout(() => {
                this._router.navigateByUrl('liste-client');
              }, 1000);
            }
      },error =>
      {
        this.existError = true;
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

  updateModel(values:Object)
  {
      Object.assign(this.client,values);
  }

  //redirect vers la page liste client

  redirectPageListeClient()
  {
    window.scrollTo(0, 0);
    this.confirmChargement = true;
    this._router.navigateByUrl('liste-client');
  }
 

}
