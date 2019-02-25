
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Users2017Component } from './2017.component';
import { Aa2017_12Component } from './aa/12.component';

const routes: Routes = [
  { path: 'aa/Dec', component: Aa2017_12Component},
  { path: '', component: Users2017Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users2017RouterModule {}
