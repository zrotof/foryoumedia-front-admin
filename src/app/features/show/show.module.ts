import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';

import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowAddEditComponent } from './components/show-add-edit/show-add-edit.component';


@NgModule({
  declarations: [
    ShowsListComponent,
    ShowAddEditComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    
  ]
})
export class ShowModule { }
