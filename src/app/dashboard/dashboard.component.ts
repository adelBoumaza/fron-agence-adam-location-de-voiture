import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css',
                '../../assets/css/normalize.css',
                '../../assets/scss/style.scss',
                '../../assets/css/themify-icons.css',
                '../../assets/css/flag-icon.min.css',
                '../../assets/css/cs-skin-elastic.css',
                '../../assets/css/font-awesome.min.css'


    ]
})
export class DashboardComponent implements OnInit {

    private imgAdmin : any = 'assets/images/admin.jpg';
    private logo : any = 'assets/images/logo.png';
    private logo2 : any = 'assets/images/logo2.png';
    private avatar1 : any = 'assets/images/avatar/1.jpg';
    private avatar2 : any = 'assets/images/avatar/2.jpg';
    private avatar3 : any = 'assets/images/avatar/3.jpg';
    private avatar4 : any = 'assets/images/avatar/4.jpg';
    private admin : any = 'assets/images/admin.jpg';

    constructor() { }

    ngOnInit(): void { 
       
       this.init();
    }

    init()
    {
        $('#menuToggle').on('click', function(event) {
            $('#init').toggleClass('open');
        });
    
        $('.search-trigger').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $('.search-trigger').parent('.header-left').addClass('open');
        });
    
        $('.search-close').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $('.search-trigger').parent('.header-left').removeClass('open');
        });
    }
}


