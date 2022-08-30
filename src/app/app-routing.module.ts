import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {path: "",
    loadChildren: () => import('./core/core.module').then(m =>m.CoreModule)
  },
  {
    path: "programmes-tv", 
    loadChildren: () => import('./features/programs/programs.module').then(m =>m.ProgramsModule)
  },
  {
    path: "programmes-radio", 
    loadChildren: () => import('./features/programs/programs.module').then(m =>m.ProgramsModule)
  },
  {
    path: "types-émissions", 
    loadChildren: () => import('./features/show/show.module').then(m =>m.ShowModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
