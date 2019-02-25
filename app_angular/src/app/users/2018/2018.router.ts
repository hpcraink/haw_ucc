
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Users2018Component } from './2018.component';
import { Aa2018_12Component } from './aa/12.component';

const routes: Routes = [
  { path: 'aa/Dec', component: Aa2018_12Component},
  { path: '', component: Users2018Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users2018RouterModule {}
