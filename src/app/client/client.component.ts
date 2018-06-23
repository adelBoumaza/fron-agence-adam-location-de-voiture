import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css',
              '../../assets/scss/style.scss',
              '../../assets/css/font-awesome.min.css'
  ]
})
export class ClientComponent extends DashboardComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
    this.init();
  }

}
