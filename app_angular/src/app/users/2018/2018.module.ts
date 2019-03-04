
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { GoogleChartsModule } from 'angular-google-charts';

import { Users2018RouterModule } from './2018.router';
import { Users2018Component } from './2018.component';
import { Aa2018Component } from './aa/year.component';
import { Aa20181Component } from './aa/1.component';
import { Aa20182Component } from './aa/2.component';
import { Aa20183Component } from './aa/3.component';
import { Aa20184Component } from './aa/4.component';
import { Aa20185Component } from './aa/5.component';
import { Aa20186Component } from './aa/6.component';
import { Aa20187Component } from './aa/7.component';
import { Aa20188Component } from './aa/8.component';
import { Aa20189Component } from './aa/9.component';
import { Aa201810Component } from './aa/10.component';
import { Aa201811Component } from './aa/11.component';
import { Aa201812Component } from './aa/12.component';
import { As2018Component } from './as/year.component';
import { As20181Component } from './as/1.component';
import { As20182Component } from './as/2.component';
import { As20183Component } from './as/3.component';
import { As20184Component } from './as/4.component';
import { As20185Component } from './as/5.component';
import { As20186Component } from './as/6.component';
import { As20187Component } from './as/7.component';
import { As20188Component } from './as/8.component';
import { As20189Component } from './as/9.component';
import { As201810Component } from './as/10.component';
import { As201811Component } from './as/11.component';
import { As201812Component } from './as/12.component';
import { Es2018Component } from './es/year.component';
import { Es20186Component } from './es/6.component';
import { Es20188Component } from './es/8.component';
import { Es20189Component } from './es/9.component';
import { Es201810Component } from './es/10.component';
import { Es201811Component } from './es/11.component';
import { Es201812Component } from './es/12.component';
import { Hk2018Component } from './hk/year.component';
import { Hk20184Component } from './hk/4.component';
import { Hk20185Component } from './hk/5.component';
import { Hk20186Component } from './hk/6.component';
import { Hk20188Component } from './hk/8.component';
import { Hk201812Component } from './hk/12.component';
import { Hn2018Component } from './hn/year.component';
import { Hn201810Component } from './hn/10.component';
import { Hn201811Component } from './hn/11.component';
import { Hn201812Component } from './hn/12.component';
import { Hs2018Component } from './hs/year.component';
import { Hs20181Component } from './hs/1.component';
import { Hs20183Component } from './hs/3.component';
import { Hs20184Component } from './hs/4.component';
import { Hs20185Component } from './hs/5.component';
import { Hs20186Component } from './hs/6.component';
import { Hs20187Component } from './hs/7.component';
import { Hs20188Component } from './hs/8.component';
import { Hs20189Component } from './hs/9.component';
import { Hs201810Component } from './hs/10.component';
import { Hs201811Component } from './hs/11.component';
import { Hs201812Component } from './hs/12.component';
import { Ht2018Component } from './ht/year.component';
import { Ht20181Component } from './ht/1.component';
import { Ht20182Component } from './ht/2.component';
import { Ht20183Component } from './ht/3.component';
import { Ht20184Component } from './ht/4.component';
import { Ht20187Component } from './ht/7.component';
import { Ht20188Component } from './ht/8.component';
import { Ht20189Component } from './ht/9.component';
import { Ht201811Component } from './ht/11.component';
import { Hu2018Component } from './hu/year.component';
import { Hu20181Component } from './hu/1.component';
import { Hu20182Component } from './hu/2.component';
import { Hu20183Component } from './hu/3.component';
import { Hu20184Component } from './hu/4.component';
import { Hu20186Component } from './hu/6.component';
import { Hu20187Component } from './hu/7.component';
import { Hu20188Component } from './hu/8.component';
import { Hu20189Component } from './hu/9.component';
import { Hu201810Component } from './hu/10.component';
import { Hu201811Component } from './hu/11.component';
import { Hu201812Component } from './hu/12.component';

@NgModule({
  imports: [
    Users2018RouterModule,
    MatTableModule, MatSortModule,
    MatButtonModule, GoogleChartsModule,
    CommonModule
  ],
  declarations: [
    Users2018Component,
    Aa2018Component,
    Aa20181Component,
    Aa20182Component,
    Aa20183Component,
    Aa20184Component,
    Aa20185Component,
    Aa20186Component,
    Aa20187Component,
    Aa20188Component,
    Aa20189Component,
    Aa201810Component,
    Aa201811Component,
    Aa201812Component,
    As2018Component,
    As20181Component,
    As20182Component,
    As20183Component,
    As20184Component,
    As20185Component,
    As20186Component,
    As20187Component,
    As20188Component,
    As20189Component,
    As201810Component,
    As201811Component,
    As201812Component,
    Es2018Component,
    Es20186Component,
    Es20188Component,
    Es20189Component,
    Es201810Component,
    Es201811Component,
    Es201812Component,
    Hk2018Component,
    Hk20184Component,
    Hk20185Component,
    Hk20186Component,
    Hk20188Component,
    Hk201812Component,
    Hn2018Component,
    Hn201810Component,
    Hn201811Component,
    Hn201812Component,
    Hs2018Component,
    Hs20181Component,
    Hs20183Component,
    Hs20184Component,
    Hs20185Component,
    Hs20186Component,
    Hs20187Component,
    Hs20188Component,
    Hs20189Component,
    Hs201810Component,
    Hs201811Component,
    Hs201812Component,
    Ht2018Component,
    Ht20181Component,
    Ht20182Component,
    Ht20183Component,
    Ht20184Component,
    Ht20187Component,
    Ht20188Component,
    Ht20189Component,
    Ht201811Component,
    Hu2018Component,
    Hu20181Component,
    Hu20182Component,
    Hu20183Component,
    Hu20184Component,
    Hu20186Component,
    Hu20187Component,
    Hu20188Component,
    Hu20189Component,
    Hu201810Component,
    Hu201811Component,
    Hu201812Component,

  ],
})
export class Users2018Module { }
