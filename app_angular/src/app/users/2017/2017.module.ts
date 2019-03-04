
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { GoogleChartsModule } from 'angular-google-charts';

import { Users2017RouterModule } from './2017.router';
import { Users2017Component } from './2017.component';
import { Aa2017Component } from './aa/year.component';
import { Aa20175Component } from './aa/5.component';
import { Aa20176Component } from './aa/6.component';
import { Aa20177Component } from './aa/7.component';
import { Aa20178Component } from './aa/8.component';
import { Aa20179Component } from './aa/9.component';
import { Aa201710Component } from './aa/10.component';
import { Aa201711Component } from './aa/11.component';
import { Aa201712Component } from './aa/12.component';
import { As2017Component } from './as/year.component';
import { As20175Component } from './as/5.component';
import { As20176Component } from './as/6.component';
import { As20177Component } from './as/7.component';
import { As20178Component } from './as/8.component';
import { As20179Component } from './as/9.component';
import { As201710Component } from './as/10.component';
import { As201711Component } from './as/11.component';
import { As201712Component } from './as/12.component';
import { Es2017Component } from './es/year.component';
import { Es201710Component } from './es/10.component';
import { Hk2017Component } from './hk/year.component';
import { Hk201710Component } from './hk/10.component';
import { Hk201711Component } from './hk/11.component';
import { Hk201712Component } from './hk/12.component';
import { Hs2017Component } from './hs/year.component';
import { Hs201710Component } from './hs/10.component';
import { Hs201711Component } from './hs/11.component';
import { Ht2017Component } from './ht/year.component';
import { Ht20179Component } from './ht/9.component';
import { Ht201711Component } from './ht/11.component';
import { Ht201712Component } from './ht/12.component';
import { Hu2017Component } from './hu/year.component';
import { Hu20177Component } from './hu/7.component';
import { Hu201710Component } from './hu/10.component';
import { Hu201711Component } from './hu/11.component';
import { Hu201712Component } from './hu/12.component';

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
    Aa20175Component,
    Aa20176Component,
    Aa20177Component,
    Aa20178Component,
    Aa20179Component,
    Aa201710Component,
    Aa201711Component,
    Aa201712Component,
    As2017Component,
    As20175Component,
    As20176Component,
    As20177Component,
    As20178Component,
    As20179Component,
    As201710Component,
    As201711Component,
    As201712Component,
    Es2017Component,
    Es201710Component,
    Hk2017Component,
    Hk201710Component,
    Hk201711Component,
    Hk201712Component,
    Hs2017Component,
    Hs201710Component,
    Hs201711Component,
    Ht2017Component,
    Ht20179Component,
    Ht201711Component,
    Ht201712Component,
    Hu2017Component,
    Hu20177Component,
    Hu201710Component,
    Hu201711Component,
    Hu201712Component,

  ],
})
export class Users2017Module { }
