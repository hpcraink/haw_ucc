
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

import { Users2019RouterModule } from './2019.router';
import { Users2019Component } from './2019.component';
import { Aa2019_12Component } from './aa/12.component';

@NgModule({
  imports: [
    Users2019RouterModule,
    MatTableModule, MatSortModule, MatButtonModule,
    CommonModule
  ],
  declarations: [
    Users2019Component,
    Aa2019_12Component
  ],
})
export class Users2019Module { }
