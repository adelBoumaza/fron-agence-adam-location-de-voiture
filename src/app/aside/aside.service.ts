import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class AsideService {

  isOpen = true;


  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() timerOutput: EventEmitter<any> = new EventEmitter();
  @Output() disparaite: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.change.emit(this.isOpen);
  }

  initTimer(x) {
    this.timerOutput.emit(x);
  }

}