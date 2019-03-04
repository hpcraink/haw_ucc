
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'aa/Year', component: Aa2017Component},
  { path: 'aa/May', component: Aa20175Component},
  { path: 'aa/Jun', component: Aa20176Component},
  { path: 'aa/Jul', component: Aa20177Component},
  { path: 'aa/Aug', component: Aa20178Component},
  { path: 'aa/Sep', component: Aa20179Component},
  { path: 'aa/Oct', component: Aa201710Component},
  { path: 'aa/Nov', component: Aa201711Component},
  { path: 'aa/Dec', component: Aa201712Component},
  { path: 'as/Year', component: As2017Component},
  { path: 'as/May', component: As20175Component},
  { path: 'as/Jun', component: As20176Component},
  { path: 'as/Jul', component: As20177Component},
  { path: 'as/Aug', component: As20178Component},
  { path: 'as/Sep', component: As20179Component},
  { path: 'as/Oct', component: As201710Component},
  { path: 'as/Nov', component: As201711Component},
  { path: 'as/Dec', component: As201712Component},
  { path: 'es/Year', component: Es2017Component},
  { path: 'es/Oct', component: Es201710Component},
  { path: 'hk/Year', component: Hk2017Component},
  { path: 'hk/Oct', component: Hk201710Component},
  { path: 'hk/Nov', component: Hk201711Component},
  { path: 'hk/Dec', component: Hk201712Component},
  { path: 'hs/Year', component: Hs2017Component},
  { path: 'hs/Oct', component: Hs201710Component},
  { path: 'hs/Nov', component: Hs201711Component},
  { path: 'ht/Year', component: Ht2017Component},
  { path: 'ht/Sep', component: Ht20179Component},
  { path: 'ht/Nov', component: Ht201711Component},
  { path: 'ht/Dec', component: Ht201712Component},
  { path: 'hu/Year', component: Hu2017Component},
  { path: 'hu/Jul', component: Hu20177Component},
  { path: 'hu/Oct', component: Hu201710Component},
  { path: 'hu/Nov', component: Hu201711Component},
  { path: 'hu/Dec', component: Hu201712Component},
  { path: '', component: Users2017Component}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users2017RouterModule {}
