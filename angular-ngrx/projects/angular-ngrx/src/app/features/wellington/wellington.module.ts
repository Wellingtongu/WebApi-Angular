import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellingtonRoutingModule } from './wellington-routing.module';
import { WellingtonComponent } from './wellington/wellington.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WellingtonComponent],
  imports: [
    CommonModule,
    WellingtonRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class WellingtonModule { }
