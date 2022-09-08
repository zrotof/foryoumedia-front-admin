import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';

import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowAddEditComponent } from './components/show-add-edit/show-add-edit.component';
import { ShowRoutingModule } from './show-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowsListComponent,
    ShowAddEditComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ShowRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ShowsListComponent,
    ShowAddEditComponent
  ]
})
export class ShowModule { }
