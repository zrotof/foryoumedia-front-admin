import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    MessageModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule
  ],
  exports : [

    TableModule,
    ToastModule,
    MessageModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class PrimengModule { }
