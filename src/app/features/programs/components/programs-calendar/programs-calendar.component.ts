import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramDataService } from 'src/app/shared/services/programs/program-data/program-data.service';

@Component({
  selector: 'app-programs-calendar',
  templateUrl: './programs-calendar.component.html',
  styleUrls: ['./programs-calendar.component.scss']
})
export class ProgramsCalendarComponent implements OnInit {

  //Used to store data about schedule, it take in count data coming from the database from the corresponding month
  calendarDataArray = new Array();

  //Used to store all created months
  years: any = [];
  //Used to get the current choosen year
  choosenYear!:number;

  //Used to store all created months
  months: any = [];
  //Used to get the current choosen month
  choosenMonth!:number;
  //Used to display or not the list of months
  showMonths : boolean = false;

  //Used to store how many days a month have
  numberOfDaysInMonth: number = 0;
  //Used to store string value of the days of the week
  daysOfWeekString: any = []
  //Used to display or not the calendar
  showCalendar : boolean = false;

  //Used to know how many blocks we have to jump in order to exactly know the initial day of the month in the week 
  jump : number = 0;

  constructor( 
    private calendarDataService: ProgramDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.initDaysOfWeek();
    this.initYears();
    this.initMonths();
  }

  //Initialize years array
  initYears(){
    this.years = [2022, 2023, 2024]
  }

  //Initialize months array
  initMonths(){
    this.months =[
      {
        name: "Janvier",
        value: 0,
        active: false
      },
      {
        name: "Février",
        value: 1,
        active: false
      },
      {
        name: "Mars",
        value: 2,
        active: false
      },
      {
        name: "Avril",
        value: 3,
        active: false
      },
      {
        name: "Mai",
        value: 4,
        active: false
      },
      {
        name: "Juin",
        value: 5,
        active: false
      },
      {
        name: "Juillet",
        value: 6,
        active: false
      },
      {
        name: "Août",
        value: 7,
        active: false
      },
      {
        name: "Septembre",
        value: 8,
        active: false
      },
      {
        name: "Octobre",
        value: 9,
        active: false
      },
      {
        name: "Novembre",
        value: 10,
        active: false
      },
      {
        name: "Décembre",
        value: 11,
        active: false
      }


    ]
  }

  //Initialize days in a week array
  initDaysOfWeek(){
    this.daysOfWeekString = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
  }

  onChooseYear(year: number, index: number){
    this.choosenYear = year;
    this.showMonths = true;
    this.setActiveClassToClickedYear(index);

    this.calendarDataService.updateCurrentYear(year);
  }


  onChooseMonth(month: number, index: number){

    this.choosenMonth = month;

    this.setActiveClassToClickedMonth(index);

    //Getting the first day of the month
    const date = new Date(this.choosenYear, this.choosenMonth, 1);

    //getting the string value of the first day in order to calculate the jump we have to do
    const dayOfTheWeek = date.toLocaleDateString('fr-FR', {weekday: 'long'});

    //Getting the exact jump of block(s) we have to do in order to start to the right day on the calendar view
    this.jump = this.daysOfWeekString.indexOf(dayOfTheWeek);

    //enabling the view of the calendar
    this.showCalendar = true;

    this.numberOfDaysInMonth = new Date(this.choosenYear, this.choosenMonth + 1, 0).getDate();

    this.buildCalendarDataArray(this.numberOfDaysInMonth  + this.jump);
    this.calendarDataService.updateCurrentMonth(month);
  }


  buildCalendarDataArray(iteration: number){

    this.calendarDataArray = new Array(iteration);

    for(let i = 0; i< iteration ; i++){
      if(i < this.jump){
        this.calendarDataArray[i] = ""
      }
      else{
        this.calendarDataArray[i] = { value: i - this.jump+1, status: "validate"}
      }
    }
  }

  onChooseDay(day: number){

    const queryParams = {
      jour: day,
      mois: this.choosenMonth + 1,
      annee: this.choosenYear
    }

    this.router.navigate(["/programmes-tv/liste"], {queryParams});
  
  }


  //Add the active state to the clicked year
  setActiveClassToClickedYear(index: number){
    const years = document.querySelectorAll(".year");

    years.forEach(year =>{
        year.classList.remove("active-year");
    })
    years[index].classList.add("active-year")
  }

  //Add the active state to the clicked month
  setActiveClassToClickedMonth(index: number){
    this.months.forEach((month: any) =>{
      month.active = false;    
    })
    this.months[index].active = true;
  }
}
