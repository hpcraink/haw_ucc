#!/usr/bin/env python3

import os, sys, getopt
from string import Template

def html(year, month):
  text = '''
<mat-tab-group mat-align-tabs="end">
  <mat-tab label="total">
    <ng-template matTabContent>
      <data-${year}-total></data-${year}-total>
    </ng-template>
  </mat-tab>
  <mat-tab label="annual">
    <ng-template matTabContent>
      <data-${year}-annual></data-${year}-annual>
    </ng-template>
  </mat-tab>'''
  start = 1
  while (start <= month):
    tmpl = Template('''
  <mat-tab label="${month}">
    <ng-template matTabContent>
      <data-${year}-${month}></data-${year}-${month}>
    </ng-template>
  </mat-tab>''')
    text += tmpl.substitute(year=str(year), month=str(start))
    start += 1
  text += '''
</mat-tab-group>
<unis-root></unis-root>
'''
  tmpl = Template(text)
  return tmpl.substitute(year=str(year))

def module(year, month):
  text = '''
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { Year${year}Component } from './${year}.component';
import { Year${year}RouterModule } from './${year}.router';
import { UnisModule } from '../unis/unis.module';

import { TotalModule } from './total/total.module';
import { AnnualModule } from './annual/annual.module';'''
  start = 1
  while (start <= month):
    text += Template('''
import { Month${month}Module } from './${month}/${month}.module';''').substitute(month=str(start))
    start +=1

  text += '''
@NgModule({
  imports: [
    AnnualModule,
    TotalModule,'''
  start = 1
  while (start <= month):
    text += Template('''
    Month${month}Module,''').substitute(month=str(start))
    start += 1

  text += '''
    UnisModule,
    Year${year}RouterModule,
    MatTabsModule,
    CommonModule
  ],
  declarations: [ Year${year}Component ],
})
export class Year${year}Module { }
'''
  return Template(text).substitute(year=year)

def createFiles(year=2019, month=1):
  outputFolder = "./ngData/" + str(year)
  htmlFile = os.path.join(outputFolder, str(year) + '.component.html')
  moduleFile = os.path.join(outputFolder, str(year) + '.module.ts')

  if not os.path.exists(outputFolder): os.makedirs(outputFolder)

  with open(htmlFile, 'w') as f:
    f.write(html(year, month))

  with open(moduleFile, 'w') as f:
    f.write(module(year, month))

def main(argv):
  try:
    opts, args = getopt.getopt(argv, "y:m:")
  except getopt.GetoptError:
    print ('update_modules.py -y <year> -m <month>')
    sys.exit(2)
  for opt, arg in opts:
    if opt == '-y':
      year = int(arg)
    if opt == '-m':
      month = int(arg)
  createFiles(year, month)

if __name__ == "__main__":
  main(sys.argv[1:])
