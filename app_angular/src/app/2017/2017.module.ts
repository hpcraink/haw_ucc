import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { Year2017Component } from './2017.component';
import { Year2017RouterModule } from './2017.router';
import { UnisModule } from '../unis/unis.module';

import { TotalModule } from './total/total.module';
import { AnnualModule } from './annual/annual.module';
import { Month12Module } from './12/12.module';
import { Month11Module } from './11/11.module';
import { Month10Module } from './10/10.module';
import { Month9Module } from './9/9.module';
import { Month8Module } from './8/8.module';
import { Month7Module } from './7/7.module';
import { Month6Module } from './6/6.module';
import { Month5Module } from './5/5.module';


@NgModule({
  declarations: [ Year2017Component ],
  imports: [
    TotalModule,
    AnnualModule,
    Month12Module,
    Month11Module,
    Month10Module,
    Month9Module,
    Month8Module,
    Month7Module,
    Month6Module,
    Month5Module,
    UnisModule,
    Year2017RouterModule,
    MatTabsModule,
    CommonModule
  ],
  exports: [ Year2017Component ]
})
export class Year2017Module { }
