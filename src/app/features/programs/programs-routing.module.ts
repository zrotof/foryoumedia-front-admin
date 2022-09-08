import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramAddEditComponent } from './components/program-add-edit/program-add-edit.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramsCalendarComponent } from './components/programs-calendar/programs-calendar.component';


const routes: Routes = [
  {path:'', component: ProgramsCalendarComponent},
  {path:'liste', component: ProgramListComponent},
  {path:'créer', component: ProgramAddEditComponent},
  {path:'modifier/:id', component: ProgramAddEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProgramsRoutingModule { }