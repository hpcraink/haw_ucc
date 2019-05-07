
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { GoogleChartsModule } from 'angular-google-charts';

import { Users2019RouterModule } from './2019.router';
import { Users2019Component } from './2019.component';
import { Aa2019Component } from './aa/year.component';
import { Aa20191Component } from './aa/1.component';
import { Aa20192Component } from './aa/2.component';
import { Aa20193Component } from './aa/3.component';
import { Aa20194Component } from './aa/4.component';
import { Aa20195Component } from './aa/5.component';
import { As2019Component } from './as/year.component';
import { As20191Component } from './as/1.component';
import { As20192Component } from './as/2.component';
import { As20193Component } from './as/3.component';
import { As20194Component } from './as/4.component';
import { Es2019Component } from './es/year.component';
import { Es20191Component } from './es/1.component';
import { Es20192Component } from './es/2.component';
import { Es20193Component } from './es/3.component';
import { Es20194Component } from './es/4.component';
import { Es20195Component } from './es/5.component';
import { Hk2019Component } from './hk/year.component';
import { Hk20191Component } from './hk/1.component';
import { Hk20192Component } from './hk/2.component';
import { Hn2019Component } from './hn/year.component';
import { Hn20191Component } from './hn/1.component';
import { Hn20192Component } from './hn/2.component';
import { Hn20193Component } from './hn/3.component';
import { Hs2019Component } from './hs/year.component';
import { Hs20191Component } from './hs/1.component';
import { Hs20192Component } from './hs/2.component';
import { Hs20193Component } from './hs/3.component';
import { Hs20194Component } from './hs/4.component';
import { Hs20195Component } from './hs/5.component';
import { Hu2019Component } from './hu/year.component';
import { Hu20191Component } from './hu/1.component';
import { Hu20192Component } from './hu/2.component';
import { Hu20193Component } from './hu/3.component';
import { Hu20194Component } from './hu/4.component';
import { Hu20195Component } from './hu/5.component';

@NgModule({
  imports: [
    Users2019RouterModule,
    MatTableModule, MatSortModule,
    MatButtonModule, GoogleChartsModule,
    CommonModule
  ],
  declarations: [
    Users2019Component,
    Aa2019Component,
    Aa20191Component,
    Aa20192Component,
    Aa20193Component,
    Aa20194Component,
    Aa20195Component,
    As2019Component,
    As20191Component,
    As20192Component,
    As20193Component,
    As20194Component,
    Es2019Component,
    Es20191Component,
    Es20192Component,
    Es20193Component,
    Es20194Component,
    Es20195Component,
    Hk2019Component,
    Hk20191Component,
    Hk20192Component,
    Hn2019Component,
    Hn20191Component,
    Hn20192Component,
    Hn20193Component,
    Hs2019Component,
    Hs20191Component,
    Hs20192Component,
    Hs20193Component,
    Hs20194Component,
    Hs20195Component,
    Hu2019Component,
    Hu20191Component,
    Hu20192Component,
    Hu20193Component,
    Hu20194Component,
    Hu20195Component,

  ],
})
export class Users2019Module { }
