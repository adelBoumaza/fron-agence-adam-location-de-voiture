import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css','../../assets/scss/style.scss',
  '../../assets/css/font-awesome.min.css']
})
export class RevisionComponent implements OnInit {

  ICON_REVISION_PATH = '../../assets/icon/icon-wrench.png';

  constructor() { }

  ngOnInit() {
  }



}
