import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    MessageModule,
    ConfirmDialogModule
  ],
  exports : [

    TableModule,
    ToastModule,
    MessageModule,
    ConfirmDialogModule
  ]
})
export class PrimengModule { }
