import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { AsideService } from '../aside/aside.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent  implements OnInit {

  
  timer = 5 ;
  ICON_CARS = '../../assets/icon/icon-car.png';
  ICON_ALERT = '../../assets/icon/error.png';

  constructor(private _asideService:AsideService) 
  {}

  ngOnInit() {
  }

  repeterAlert()
  {
    this._asideService.toggle();
    this._asideService.initTimer(this.timer);
    
    //console.log(this.asideComponent.menuState);
  }

  faireDisparaitre()
  {
    this._asideService.toggle();
    console.log('faire disparaiter alert comp called');
  }

  

}
