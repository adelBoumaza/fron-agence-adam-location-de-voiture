import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {

    @Input() rows;
    @Input() data;
    constructor() { }

    ngOnInit(): void { }
}
