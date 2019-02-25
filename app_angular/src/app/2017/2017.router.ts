import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Year2017Component } from './2017.component';

const routes: Routes = [
  { path: '', component: Year2017Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Year2017RouterModule {}
