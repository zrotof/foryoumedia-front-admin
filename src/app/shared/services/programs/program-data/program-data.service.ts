import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramDataService {

  currentYear$: Subject<number> = new Subject();
  currentMonth$: Subject<number> = new Subject();
  currentDay$: Subject<number> = new Subject();

  constructor() { }


  updateCurrentYear(value: number){
    this.currentYear$.next(value)
  }

  updateCurrentMonth(value: number){
    this.currentMonth$.next(value)
  }

  updateCurrentDay(value: number){
    this.currentDay$.next(value)
  }

}
