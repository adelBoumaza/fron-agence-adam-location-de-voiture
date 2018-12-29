import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: []
})
export class SearchComponent implements OnInit {
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() filterQuery: string = '';
    @Output() changeValue = new EventEmitter<string>();

    constructor() { }


    ngOnInit(): void { }

    onChange(event) {
        this.changeValue.emit(event);
    }
}
