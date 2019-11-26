import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellingtonComponent } from './wellington/wellington.component';

const routes: Routes = [
  {path: '', component: WellingtonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellingtonRoutingModule { }
