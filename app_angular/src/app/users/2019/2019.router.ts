
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'aa/Year', component: Aa2019Component},
  { path: 'aa/Jan', component: Aa20191Component},
  { path: 'aa/Feb', component: Aa20192Component},
  { path: 'as/Year', component: As2019Component},
  { path: 'as/Jan', component: As20191Component},
  { path: 'as/Feb', component: As20192Component},
  { path: 'es/Year', component: Es2019Component},
  { path: 'es/Jan', component: Es20191Component},
  { path: 'es/Feb', component: Es20192Component},
  { path: 'es/Mar', component: Es20193Component},
  { path: 'hk/Year', component: Hk2019Component},
  { path: 'hk/Jan', component: Hk20191Component},
  { path: 'hk/Feb', component: Hk20192Component},
  { path: 'hn/Year', component: Hn2019Component},
  { path: 'hn/Jan', component: Hn20191Component},
  { path: 'hn/Feb', component: Hn20192Component},
  { path: 'hs/Year', component: Hs2019Component},
  { path: 'hs/Jan', component: Hs20191Component},
  { path: 'hs/Feb', component: Hs20192Component},
  { path: 'hs/Mar', component: Hs20193Component},
  { path: 'hu/Year', component: Hu2019Component},
  { path: 'hu/Jan', component: Hu20191Component},
  { path: 'hu/Feb', component: Hu20192Component},
  { path: 'hu/Mar', component: Hu20193Component},
  { path: '', component: Users2019Component}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users2019RouterModule {}
