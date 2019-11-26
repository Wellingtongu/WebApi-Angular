import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HiagoComponent } from './hiago/hiago.component';

const routes: Routes = [
  {path: '', component: HiagoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiagoRoutingModule { }
