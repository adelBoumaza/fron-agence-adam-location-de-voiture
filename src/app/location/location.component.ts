import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css',
  '../../assets/scss/style.scss',
  '../../assets/css/font-awesome.min.css']
})
export class LocationComponent implements OnInit {

  heureDepart : {hour: 13, minute: 30};
  heureRetour : {hour: 13, minute: 30};
  model;

  constructor() { }

  ngOnInit() {
  }


}
