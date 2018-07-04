import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { UtilitaireService } from '../common/util/utilitaire';


@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css',
  '../../assets/scss/style.scss',
  '../../assets/css/font-awesome.min.css']
})
export class VehiculeComponent implements OnInit {

  tabMarque:any;



  marqueSelected = '';
  colorSelected  = '';
   // modal
   closeResult: string;

   testColor(x)
   {
     console.log(x);
   }

   ICON_ASSURANCE_PATH = '../../assets/icon/icon-car-insurance.png';

  constructor(private modalService: NgbModal,private utilitaireService:UtilitaireService,
    private vcRef: ViewContainerRef, 
    private cpService: ColorPickerService) { }

  ngOnInit() {
    this.tabMarque = this.utilitaireService.getMarques();
  }

  //modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
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
        this.marqueSelected = "PEUGEOT";
        break;
      case 2:
        this.marqueSelected = "RENAULT";
        break;
      case 3:
        this.marqueSelected = "OPEL";
        break;
      case 4:
        this.marqueSelected = "CITROEN";
        break;
      case 5:
        this.marqueSelected = "BMW";
        break;
      case 6:
        this.marqueSelected = "ALFA ROMEO";
        break;
      case 7:
        this.marqueSelected = "AUDI";
        break;
      case 8:
        this.marqueSelected = "CHEVROLET";
        break;
      default:
        confirm("Stp, Veuillez selectionné une marque!");
    }
    console.log(marque);
  }

  public onChangeColor(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    const rgba = this.cpService.hsvaToRgba(hsva);


    console.log(color);
     console.log(rgba);

    return this.cpService.rgbaToCmyk(rgba);
  }

  

}
