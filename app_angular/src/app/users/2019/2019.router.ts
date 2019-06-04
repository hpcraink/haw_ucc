
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Users2019Component } from './2019.component';
import { Aa2019Component } from './aa/year.component';
import { Aa20191Component } from './aa/1.component';
import { Aa20192Component } from './aa/2.component';
import { Aa20193Component } from './aa/3.component';
import { Aa20194Component } from './aa/4.component';
import { Aa20195Component } from './aa/5.component';
import { Aa20196Component } from './aa/6.component';
import { As2019Component } from './as/year.component';
import { As20191Component } from './as/1.component';
import { As20192Component } from './as/2.component';
import { As20193Component } from './as/3.component';
import { As20194Component } from './as/4.component';
import { As20195Component } from './as/5.component';
import { Es2019Component } from './es/year.component';
import { Es20191Component } from './es/1.component';
import { Es20192Component } from './es/2.component';
import { Es20193Component } from './es/3.component';
import { Es20194Component } from './es/4.component';
import { Es20195Component } from './es/5.component';
import { Es20196Component } from './es/6.component';
import { Hk2019Component } from './hk/year.component';
import { Hk20191Component } from './hk/1.component';
import { Hk20192Component } from './hk/2.component';
import { Hn2019Component } from './hn/year.component';
import { Hn20191Component } from './hn/1.component';
import { Hn20192Component } from './hn/2.component';
import { Hn20193Component } from './hn/3.component';
import { Hr2019Component } from './hr/year.component';
import { Hr20195Component } from './hr/5.component';
import { Hs2019Component } from './hs/year.component';
import { Hs20191Component } from './hs/1.component';
import { Hs20192Component } from './hs/2.component';
import { Hs20193Component } from './hs/3.component';
import { Hs20194Component } from './hs/4.component';
import { Hs20195Component } from './hs/5.component';
import { Hs20196Component } from './hs/6.component';
import { Hu2019Component } from './hu/year.component';
import { Hu20191Component } from './hu/1.component';
import { Hu20192Component } from './hu/2.component';
import { Hu20193Component } from './hu/3.component';
import { Hu20194Component } from './hu/4.component';
import { Hu20195Component } from './hu/5.component';
import { Hu20196Component } from './hu/6.component';

const routes: Routes = [
  { path: 'aa/Year', component: Aa2019Component},
  { path: 'aa/Jan', component: Aa20191Component},
  { path: 'aa/Feb', component: Aa20192Component},
  { path: 'aa/Mar', component: Aa20193Component},
  { path: 'aa/Apr', component: Aa20194Component},
  { path: 'aa/May', component: Aa20195Component},
  { path: 'aa/Jun', component: Aa20196Component},
  { path: 'as/Year', component: As2019Component},
  { path: 'as/Jan', component: As20191Component},
  { path: 'as/Feb', component: As20192Component},
  { path: 'as/Mar', component: As20193Component},
  { path: 'as/Apr', component: As20194Component},
  { path: 'as/May', component: As20195Component},
  { path: 'es/Year', component: Es2019Component},
  { path: 'es/Jan', component: Es20191Component},
  { path: 'es/Feb', component: Es20192Component},
  { path: 'es/Mar', component: Es20193Component},
  { path: 'es/Apr', component: Es20194Component},
  { path: 'es/May', component: Es20195Component},
  { path: 'es/Jun', component: Es20196Component},
  { path: 'hk/Year', component: Hk2019Component},
  { path: 'hk/Jan', component: Hk20191Component},
  { path: 'hk/Feb', component: Hk20192Component},
  { path: 'hn/Year', component: Hn2019Component},
  { path: 'hn/Jan', component: Hn20191Component},
  { path: 'hn/Feb', component: Hn20192Component},
  { path: 'hn/Mar', component: Hn20193Component},
  { path: 'hr/Year', component: Hr2019Component},
  { path: 'hr/May', component: Hr20195Component},
  { path: 'hs/Year', component: Hs2019Component},
  { path: 'hs/Jan', component: Hs20191Component},
  { path: 'hs/Feb', component: Hs20192Component},
  { path: 'hs/Mar', component: Hs20193Component},
  { path: 'hs/Apr', component: Hs20194Component},
  { path: 'hs/May', component: Hs20195Component},
  { path: 'hs/Jun', component: Hs20196Component},
  { path: 'hu/Year', component: Hu2019Component},
  { path: 'hu/Jan', component: Hu20191Component},
  { path: 'hu/Feb', component: Hu20192Component},
  { path: 'hu/Mar', component: Hu20193Component},
  { path: 'hu/Apr', component: Hu20194Component},
  { path: 'hu/May', component: Hu20195Component},
  { path: 'hu/Jun', component: Hu20196Component},
  { path: '', component: Users2019Component}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users2019RouterModule {}
