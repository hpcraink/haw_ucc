
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { Users2017RouterModule } from './2017.router';
import { Users2017Component } from './2017.component';
import { Aa2017_12Component } from './aa/12.component';

@NgModule({
  imports: [
    Users2017RouterModule,
    MatTableModule, MatButtonModule,
    CommonModule
  ],
  declarations: [
    Users2017Component,
    Aa2017_12Component
  ],
})
export class Users2017Module { }
