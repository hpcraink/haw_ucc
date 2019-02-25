import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { Year2018Component } from './2018.component';
import { Year2018RouterModule } from './2018.router';
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
import { Month4Module } from './4/4.module';
import { Month3Module } from './3/3.module';
import { Month2Module } from './2/2.module';
import { Month1Module } from './1/1.module';


@NgModule({
  declarations: [ Year2018Component ],
  imports: [
    AnnualModule,
    TotalModule,
    Month12Module,
    Month11Module,
    Month10Module,
    Month9Module,
    Month8Module,
    Month7Module,
    Month6Module,
    Month5Module,
    Month4Module,
    Month3Module,
    Month2Module,
    Month1Module,
    UnisModule,
    Year2018RouterModule,
    MatTabsModule,
    CommonModule
  ],
  exports: [ Year2018Component ]
})
export class Year2018Module { }
