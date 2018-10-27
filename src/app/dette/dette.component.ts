import { Component, OnInit } from '@angular/core';
import { DetteService } from './dette.service';

@Component({
    selector: 'app-dette',
    templateUrl: './dette.component.html',
    styleUrls: ['./dette.component.css', '../../assets/scss/style.scss',
    '../../assets/css/font-awesome.min.css']
})
export class DetteComponent implements OnInit {
    listeDette;
    totalDette: number = 0;
    ICON_MONEY = '../../assets/icon/icon-money.png';

    constructor(private detteService: DetteService) { }

    ngOnInit(): void {
        this.chercher();
    }


     chercher() {
        this.detteService.findAllDettesByUser()
        .subscribe(response => {
            this.listeDette = response;
            this.listeDette.forEach(item => {
                this.totalDette = this.totalDette + item.resteApayer;
            });
        }, error => {
            console.log('error ' + error);
        });
    }


}

