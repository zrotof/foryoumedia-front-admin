import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs-container',
  templateUrl: './programs-container.component.html',
  styleUrls: ['./programs-container.component.scss']
})
export class ProgramsContainerComponent implements OnInit, OnDestroy {


  constructor(private router:  Router) { }

  ngOnInit(): void {
  }

  navigateToCalendarComponentRoute(){
    this.router.navigateByUrl("programmes-tv/calendrier")
  }

  ngOnDestroy(): void {
      console.log("composant container détruit")
  }

}
