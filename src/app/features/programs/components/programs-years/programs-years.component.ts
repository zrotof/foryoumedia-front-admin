import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs-years',
  templateUrl: './programs-years.component.html',
  styleUrls: ['./programs-years.component.scss']
})
export class ProgramsYearsComponent implements OnInit {

  fakeArray = new Array();

  years: any = [];
  choosenYear!:number;

  months: any = [];
  choosenMonth!:number;
  
  numberOfDaysInMonth: number = 0;

  showMonths : boolean = false;




  constructor() { }

  ngOnInit(): void {
    this.initYears();
    this.initMonths();
  }

  initYears(){
    this.years = [2022, 2023, 2024]
  }
  initMonths(){
    this.months =[
      {
        name: "Janvier",
        value: 1
      },
      {
        name: "Février",
        value: 2
      },
      {
        name: "Mars",
        value: 3
      },
      {
        name: "Avril",
        value: 4
      },
      {
        name: "Mai",
        value: 5
      },
      {
        name: "Juin",
        value: 6
      },
      {
        name: "Juillet",
        value: 7
      },
      {
        name: "Août",
        value: 8
      },
      {
        name: "Septembre",
        value: 9
      },
      {
        name: "Octobre",
        value: 10
      },
      {
        name: "Novembre",
        value: 11
      },
      {
        name: "Décembre",
        value: 12
      },


    ]
  }

  onChooseYear(value: number){

    this.choosenYear = value;
    this.showMonths = true;
  }

  onChooseMonth(value: number){
    this.choosenMonth = value;
    this.getDaysInMonth(this.choosenYear, this.choosenMonth);
  }

  getDaysInMonth(year: number, month: number){
    this.numberOfDaysInMonth = new Date(year, month, 0).getDate();
    this.counter(this.numberOfDaysInMonth);
  }

  counter(i: number){
    this.fakeArray = new Array(i);
  }

  onChooseDay(value: number){

    console.log(value)
  }
}
