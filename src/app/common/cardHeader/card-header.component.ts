import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-header',
    templateUrl: './card-header.component.html',
    styleUrls: []
})
export class CardHeaderComponent implements OnInit {
    constructor() { }
    @Input() iconPath: string;
    @Input() title: string;
    @Input() value: string;
    ngOnInit(): void { }
}
