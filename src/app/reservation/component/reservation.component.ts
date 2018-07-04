import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { ReservationSesrvice } from '../service/reservation.service';
import { Options } from 'fullcalendar';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Constant } from '../../common/util/constants';

@Component({
    selector: 'app-reservation',
    templateUrl: '../views/reservation.component.html',
    styleUrls: ['../css/reservation.component.css','../../../assets/scss/style.scss']
})
export class ReservationComponent implements OnInit {

  ICON_CAR_PATH = '../../../assets/icon/icon-car.png';
  ICON_CLIENT_PATH = '../../../assets/icon/icon-employee.png';
  ICON_RESERVATION_PATH = '../../../assets/icon/icon-booking.png';
  
  confirmOpenV = false;

  calendarOptions: Options;
  displayEvent: any;
  // modal
  closeResult: string;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected eventService: ReservationSesrvice,private modalService: NgbModal) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        eventBackgroundColor : 'rgb(255, 67, 34)',
        eventTextColor : 'rgb(255,255,255)',
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });
    this.confirmOpenV = false;
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    this.confirmOpenV = true;
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        heureD : model.event.heureD,
        heureR : model.event.heureR,
        title : model.event.title,
        voiture: model.event.voiture,
        allDay: model.event.allDay,
        client :model.event.client,
        idClient : model.event.idClient,
        idVoiture : model.event.idVoiture,
        coulour : model.event.coulour
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  

  //modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.confirmOpenV = false;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
