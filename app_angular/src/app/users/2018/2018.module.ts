
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

import { Users2018RouterModule } from './2018.router';
import { Users2018Component } from './2018.component';
import { Aa2018_12Component } from './aa/12.component';

@NgModule({
  imports: [
    Users2018RouterModule,
    MatTableModule, MatSortModule, MatButtonModule,
    CommonModule
  ],
  declarations: [
    Users2018Component,
    Aa2018_12Component
  ],
})
export class Users2018Module { }
