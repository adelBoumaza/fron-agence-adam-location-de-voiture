import { Component, OnInit } from '@angular/core';
import { UtilitaireService } from '../common/util/utilitaire';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css','../../assets/scss/style.scss',
  '../../assets/css/font-awesome.min.css']
})
export class MaintenanceComponent implements OnInit {

  ICON_MAINTENANCE_PATH = '../../assets/icon/maintenance.png';
  maintenanceArray = ['Vidange','Filtre à air','Filtre à huile','Filtre à gasoil',
                      'Bougies allumage','Kit de distribution','Kit d\'embrayage','Suspensions',
                      'Plaquettes','Pneus','Roulements','Rotules','Autres'];
  

  tabMarques:any;

 



  



  constructor(private utilitaireService:UtilitaireService) { }

  ngOnInit() {
    this.tabMarques = this.utilitaireService.getMarques();
  }

}
