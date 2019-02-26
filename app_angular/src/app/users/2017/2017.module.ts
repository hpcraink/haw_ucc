
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { GoogleChartsModule } from 'angular-google-charts';

import { Users2017RouterModule } from './2017.router';
import { Users2017Component } from './2017.component';
import { Aa201712Component } from './aa/12.component';
import { Aa2017Component } from './aa/year.component';

@NgModule({
  imports: [
    Users2017RouterModule,
    MatTableModule, MatSortModule,
    MatButtonModule, GoogleChartsModule,
    CommonModule
  ],
  declarations: [
    Users2017Component,
    Aa2017Component,
    Aa201712Component
  ],
})
export class Users2017Module { }
