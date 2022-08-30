import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsContainerComponent } from './components/programs-container/programs-container.component';



const routes: Routes = [
  {path:'', component: ProgramsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProgramsRoutingModule { }