
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Users2019Component } from './2019.component';
import { Aa2019_12Component } from './aa/12.component';

const routes: Routes = [
  { path: 'aa/Dec', component: Aa2019_12Component},
  { path: '', component: Users2019Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users2019RouterModule {}
