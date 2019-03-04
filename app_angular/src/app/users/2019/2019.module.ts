
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
import { As2019Component } from './as/year.component';
import { As20191Component } from './as/1.component';
import { As20192Component } from './as/2.component';
import { Es2019Component } from './es/year.component';
import { Es20191Component } from './es/1.component';
import { Es20192Component } from './es/2.component';
import { Es20193Component } from './es/3.component';
import { Hk2019Component } from './hk/year.component';
import { Hk20191Component } from './hk/1.component';
import { Hk20192Component } from './hk/2.component';
import { Hn2019Component } from './hn/year.component';
import { Hn20191Component } from './hn/1.component';
import { Hn20192Component } from './hn/2.component';
import { Hs2019Component } from './hs/year.component';
import { Hs20191Component } from './hs/1.component';
import { Hs20192Component } from './hs/2.component';
import { Hs20193Component } from './hs/3.component';
import { Hu2019Component } from './hu/year.component';
import { Hu20191Component } from './hu/1.component';
import { Hu20192Component } from './hu/2.component';
import { Hu20193Component } from './hu/3.component';

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
    As2019Component,
    As20191Component,
    As20192Component,
    Es2019Component,
    Es20191Component,
    Es20192Component,
    Es20193Component,
    Hk2019Component,
    Hk20191Component,
    Hk20192Component,
    Hn2019Component,
    Hn20191Component,
    Hn20192Component,
    Hs2019Component,
    Hs20191Component,
    Hs20192Component,
    Hs20193Component,
    Hu2019Component,
    Hu20191Component,
    Hu20192Component,
    Hu20193Component,

  ],
})
export class Users2019Module { }
