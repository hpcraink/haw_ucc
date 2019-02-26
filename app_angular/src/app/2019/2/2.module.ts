import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatCardModule } from '@angular/material';


import { Month2Component } from './2.component';
@NgModule({
  declarations: [ Month2Component ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule ],
  exports: [ Month2Component ]
})
export class Month2Module {}
