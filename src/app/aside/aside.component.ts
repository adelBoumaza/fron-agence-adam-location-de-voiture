import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css','../../assets/css/normalize.css',
  '../../assets/scss/style.scss',
  '../../assets/css/themify-icons.css',
  '../../assets/css/flag-icon.min.css',
  '../../assets/css/cs-skin-elastic.css',
  '../../assets/css/font-awesome.min.css']
})
export class AsideComponent extends DashboardComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
