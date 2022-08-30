import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideBarNavigationComponent } from './components/side-bar-navigation/side-bar-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SideBarNavigationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent,
    SideBarNavigationComponent
  ]
})
export class CoreModule { }
