import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Observable, observable } from 'rxjs';
/*import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';*/
import { AsideService } from './aside.service';
import { UtilitaireService } from '../common/util/utilitaire';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css', '../../assets/css/normalize.css',
  '../../assets/scss/style.scss',
  '../../assets/css/themify-icons.css',
  '../../assets/css/flag-icon.min.css',
  '../../assets/css/cs-skin-elastic.css',
  '../../assets/css/font-awesome.min.css'],
 /* animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]*/
})
export class AsideComponent  {

  logo2 = '../../assets/images/logo2.png';
  logo  = '../../assets/images/logo.png';
  menuState: string = 'out';
  timer = 0;
  alive = false;
  routes: any;
  constructor(private _asideService: AsideService, private _utilitaireService: UtilitaireService)
  {
    this._asideService.change.subscribe(isOpen =>
    {
        if (isOpen) {
           // this.toggleMenu();
        }
    });
    this._asideService.timerOutput.subscribe(x =>
    {
      this.timer = x * 1000;
      this.alive = true;
      // this.repeter();
    });
    this.faireDisparaitre();
    this.routes  = _utilitaireService.getMenuRoutes();
  }
 /* ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  ngOnInit() {
    console.log('ngOninit');
  }*/

 /* repeter(): void {
    this.menuState = 'in';
    console.log(this.timer);
    Observable.timer(0, this.timer)
    .takeWhile(() => this.alive) // only fires when component is alive
    .subscribe(() => {
      this.toggleMenu();
    });
  }*/

  faireDisparaitre() {
    this._asideService.change.subscribe(isOpen => {
      this.menuState = 'in';
      this.alive = false;
      // this.toggleMenu();
    });
  }

}
