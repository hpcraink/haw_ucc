import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatCardModule } from '@angular/material';


import { TotalComponent } from './total.component';
@NgModule({
  declarations: [ TotalComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule ],
  exports: [ TotalComponent ]
})
export class TotalModule {}
