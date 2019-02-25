import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatCardModule } from '@angular/material';


import { Month6Component } from './6.component';
@NgModule({
  declarations: [ Month6Component ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule ],
  exports: [ Month6Component ]
})
export class Month6Module {}
