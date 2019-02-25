import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatCardModule } from '@angular/material';


import { AnnualComponent } from './annual.component';
@NgModule({
  declarations: [ AnnualComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    GoogleChartsModule ],
  exports: [ AnnualComponent ]
})
export class AnnualModule {}
