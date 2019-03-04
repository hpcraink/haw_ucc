
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'aa/Year', component: Aa2018Component},
  { path: 'aa/Jan', component: Aa20181Component},
  { path: 'aa/Feb', component: Aa20182Component},
  { path: 'aa/Mar', component: Aa20183Component},
  { path: 'aa/Apr', component: Aa20184Component},
  { path: 'aa/May', component: Aa20185Component},
  { path: 'aa/Jun', component: Aa20186Component},
  { path: 'aa/Jul', component: Aa20187Component},
  { path: 'aa/Aug', component: Aa20188Component},
  { path: 'aa/Sep', component: Aa20189Component},
  { path: 'aa/Oct', component: Aa201810Component},
  { path: 'aa/Nov', component: Aa201811Component},
  { path: 'aa/Dec', component: Aa201812Component},
  { path: 'as/Year', component: As2018Component},
  { path: 'as/Jan', component: As20181Component},
  { path: 'as/Feb', component: As20182Component},
  { path: 'as/Mar', component: As20183Component},
  { path: 'as/Apr', component: As20184Component},
  { path: 'as/May', component: As20185Component},
  { path: 'as/Jun', component: As20186Component},
  { path: 'as/Jul', component: As20187Component},
  { path: 'as/Aug', component: As20188Component},
  { path: 'as/Sep', component: As20189Component},
  { path: 'as/Oct', component: As201810Component},
  { path: 'as/Nov', component: As201811Component},
  { path: 'as/Dec', component: As201812Component},
  { path: 'es/Year', component: Es2018Component},
  { path: 'es/Jun', component: Es20186Component},
  { path: 'es/Aug', component: Es20188Component},
  { path: 'es/Sep', component: Es20189Component},
  { path: 'es/Oct', component: Es201810Component},
  { path: 'es/Nov', component: Es201811Component},
  { path: 'es/Dec', component: Es201812Component},
  { path: 'hk/Year', component: Hk2018Component},
  { path: 'hk/Apr', component: Hk20184Component},
  { path: 'hk/May', component: Hk20185Component},
  { path: 'hk/Jun', component: Hk20186Component},
  { path: 'hk/Aug', component: Hk20188Component},
  { path: 'hk/Dec', component: Hk201812Component},
  { path: 'hn/Year', component: Hn2018Component},
  { path: 'hn/Oct', component: Hn201810Component},
  { path: 'hn/Nov', component: Hn201811Component},
  { path: 'hn/Dec', component: Hn201812Component},
  { path: 'hs/Year', component: Hs2018Component},
  { path: 'hs/Jan', component: Hs20181Component},
  { path: 'hs/Mar', component: Hs20183Component},
  { path: 'hs/Apr', component: Hs20184Component},
  { path: 'hs/May', component: Hs20185Component},
  { path: 'hs/Jun', component: Hs20186Component},
  { path: 'hs/Jul', component: Hs20187Component},
  { path: 'hs/Aug', component: Hs20188Component},
  { path: 'hs/Sep', component: Hs20189Component},
  { path: 'hs/Oct', component: Hs201810Component},
  { path: 'hs/Nov', component: Hs201811Component},
  { path: 'hs/Dec', component: Hs201812Component},
  { path: 'ht/Year', component: Ht2018Component},
  { path: 'ht/Jan', component: Ht20181Component},
  { path: 'ht/Feb', component: Ht20182Component},
  { path: 'ht/Mar', component: Ht20183Component},
  { path: 'ht/Apr', component: Ht20184Component},
  { path: 'ht/Jul', component: Ht20187Component},
  { path: 'ht/Aug', component: Ht20188Component},
  { path: 'ht/Sep', component: Ht20189Component},
  { path: 'ht/Nov', component: Ht201811Component},
  { path: 'hu/Year', component: Hu2018Component},
  { path: 'hu/Jan', component: Hu20181Component},
  { path: 'hu/Feb', component: Hu20182Component},
  { path: 'hu/Mar', component: Hu20183Component},
  { path: 'hu/Apr', component: Hu20184Component},
  { path: 'hu/Jun', component: Hu20186Component},
  { path: 'hu/Jul', component: Hu20187Component},
  { path: 'hu/Aug', component: Hu20188Component},
  { path: 'hu/Sep', component: Hu20189Component},
  { path: 'hu/Oct', component: Hu201810Component},
  { path: 'hu/Nov', component: Hu201811Component},
  { path: 'hu/Dec', component: Hu201812Component},
  { path: '', component: Users2018Component}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users2018RouterModule {}
