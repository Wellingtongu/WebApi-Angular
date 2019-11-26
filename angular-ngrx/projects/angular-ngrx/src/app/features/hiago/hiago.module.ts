import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiagoRoutingModule } from './hiago-routing.module';
import { HiagoComponent } from './hiago/hiago.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HiagoComponent],
  imports: [
    CommonModule,
    HiagoRoutingModule,
    SharedModule,
  ]
})
export class HiagoModule { }
