import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramAddEditComponent } from './components/program-add-edit/program-add-edit.component';
import { ProgramsCalendarComponent } from './components/programs-calendar/programs-calendar.component';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProgramsCalendarComponent,
    ProgramListComponent,
    ProgramAddEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgramsRoutingModule,
    PrimengModule
  ],
  exports:[
    ProgramsCalendarComponent,
    ProgramListComponent,
    ProgramAddEditComponent
  ]
})

export class ProgramsModule { }
