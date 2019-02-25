import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Year2019Component } from './2019.component';

const routes: Routes = [
  { path: '', component: Year2019Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Year2019RouterModule {}
