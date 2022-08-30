import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsContainerComponent } from './components/programs-container/programs-container.component';
import { ProgramsYearsComponent } from './components/programs-years/programs-years.component';
import { ProgramsRoutingModule } from './programs-routing.module';

@NgModule({
  declarations: [
    ProgramsContainerComponent,
    ProgramsYearsComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ]
})

export class ProgramsModule { }
