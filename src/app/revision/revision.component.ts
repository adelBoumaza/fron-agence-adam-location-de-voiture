import { Component, OnInit } from '@angular/core';
import { RevisionService } from './revision.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Revision } from './revision.model';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css', '../../assets/scss/style.scss',
    '../../assets/css/font-awesome.min.css']
})
export class RevisionComponent implements OnInit {

  ICON_REVISION_PATH = '../../assets/icon/icon-wrench.png';

  listeRevision: Array<any>;
  confirm: boolean;
  confirmChargement: boolean;
  revision: Revision;
  chargement = '../../assets/icon/chargement.gif';
  ICON_ERROR = '../../assets/icon/error.png';
  ICON_SUCCESS = '../../assets/icon/correct.png';
  messageSuccess: string;
  confirmError: boolean;
  confirmSuccess: boolean;
  titleHeaderPart: string = 'Catégorie de révision';

  constructor(private _revisionService: RevisionService,
    private _routing: Router,
    private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadData();
    this.reset();
  }
  loadData() {
    this.listeRevision = this._route.snapshot.data['listeRevision'];
  }

  reset() {
    this.confirm = false;
    this.revision = {} as Revision;
    this.confirmChargement = false;
  }

  findOneRevision(item) {
    this.confirmError = false;
    this.confirmSuccess = false;
    this.messageSuccess = '';
    this.confirmChargement = true;
    this.revision = item;
    console.log(this.revision);
    window.scroll(0, 0);
    setTimeout(() => {
      this.confirmChargement = false;
      this.confirm = true;
    }, 500);
    this.confirm = false;
  }

  updateRevision() {
    window.scroll(0, 0);
    this._revisionService.updateRevision(this.revision)
      .subscribe(response => {
        this.confirmSuccess = true;
        this.messageSuccess = 'Le paramètrage de la voiture est mise à jour';
      }, error => {
        this.confirmError = true;
        this.messageSuccess = 'Une erreur est survenue lors de la tentative de traitement de votre demande (-_-) !';
        throw error;
      });
    this.reset();
  }

  annuler() {
    this.reset();
    window.scroll(0, 0);
  }


}
