import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-part',
  templateUrl: './header-part.component.html',
  styleUrls: ['./header-part.component.css']
})
export class HeaderPartComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  ngOnInit() {
  }

}
