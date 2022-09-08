import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAddEditComponent } from './components/show-add-edit/show-add-edit.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';

const routes: Routes = [
  {path:'', component: ShowsListComponent},
  {path:'créer', component: ShowAddEditComponent},
  {path:'modifier/:id', component: ShowAddEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShowRoutingModule { }