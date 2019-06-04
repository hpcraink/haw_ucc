
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { Year2019Component } from './2019.component';
import { Year2019RouterModule } from './2019.router';
import { UnisModule } from '../unis/unis.module';

import { TotalModule } from './total/total.module';
import { AnnualModule } from './annual/annual.module';
import { Month1Module } from './1/1.module';
import { Month2Module } from './2/2.module';
import { Month3Module } from './3/3.module';
import { Month4Module } from './4/4.module';
import { Month5Module } from './5/5.module';
import { Month6Module } from './6/6.module';
@NgModule({
  imports: [
    AnnualModule,
    TotalModule,
    Month1Module,
    Month2Module,
    Month3Module,
    Month4Module,
    Month5Module,
    Month6Module,
    UnisModule,
    Year2019RouterModule,
    MatTabsModule,
    CommonModule
  ],
  declarations: [ Year2019Component ],
})
export class Year2019Module { }
