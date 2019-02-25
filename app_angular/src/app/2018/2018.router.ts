import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Year2018Component } from './2018.component';

const routes: Routes = [
  { path: '', component: Year2018Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Year2018RouterModule {}
