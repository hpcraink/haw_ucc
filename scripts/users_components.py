#!/usr/bin/env python3

import os, json, sys, getopt
from string import Template

inputDataFolder = "./ngData/_data"
outputFolder = "./ngData/users"
hawPrefixes = ['aa', 'as', 'es', 'hf', 'hk', 'hn', 'hr', 'hs', 'ht', 'hu', 'ro']
sublinks = ['Year', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec']

def uniData (prefix, year, month):
  data = getJsonObject(year, month)

  if data != -1:
    for dict in data:
      if dict['haw'] == prefix : return dict
  return -1

def getJsonObject (year, month):
  fileName = str(year) + '.json' if month == -1 else str(year) + '-' + str(month) + '.json'
  inputFile = os.path.join(inputDataFolder, fileName)

  if os.path.exists(inputFile):
    with open (inputFile, 'r') as jsonFile:
      for line in jsonFile:
        return json.loads(line)
  return -1

def inserts(year):
  routes, imports, components = [], [], [];

  for prefix in hawPrefixes:
    if uniData(prefix, year, -1) != -1 :
      cmpnt = (prefix + str(year) + 'Component').title()
      components.append(cmpnt)
      routeStr = "{ path: '" + prefix + "/Year', component: " + cmpnt + "},"
      routes.append(routeStr)
      importTmpl = Template("import { ${cmpnt} } from './${prefix}/year.component';")
      imports.append(importTmpl.substitute(cmpnt=cmpnt, prefix=prefix))
    for month in range(1,13):
      if uniData(prefix, year, month) != -1:
        cmpnt = (prefix + str(year) + str(month) + 'Component').title()
        components.append(cmpnt)
        routeStr = "{ path: '" + prefix + "/" + sublinks[month] + "', component: " + cmpnt + "},"
        routes.append(routeStr)
        importTmpl = Template("import { ${cmpnt} } from './${prefix}/${month}.component';")
        imports.append(importTmpl.substitute(cmpnt=cmpnt, prefix=prefix, month=month))

  return {'routes': routes, 'imports': imports, 'components': components}

def addImports(db):
  text = ''
  for impString in db['imports']:
    text += impString + '\n'
  return text

def router(year):
  text = '''
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Users${year}Component } from './${year}.component';
'''

  data = inserts(year)
  text += addImports(data)

  text += "\nconst routes: Routes = [\n"

  for route in data['routes']:
    text += '  ' + route + '\n'
  text += "  { path: '', component: Users" + str(year) + "Component}\n];"

  text += '''
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Users${year}RouterModule {}
'''

  textTempl = Template(text)
  return textTempl.substitute(year=str(year))

def module(year):
  text = '''
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { GoogleChartsModule } from 'angular-google-charts';

import { Users${year}RouterModule } from './${year}.router';
import { Users${year}Component } from './${year}.component';
'''

  data = inserts(year)
  text += addImports(data)

  text += '''
@NgModule({
  imports: [
    Users${year}RouterModule,
    MatTableModule, MatSortModule,
    MatButtonModule, GoogleChartsModule,
    CommonModule
  ],
  declarations: [
    Users${year}Component,
'''
  for comp in data['components']:
    text += '    ' + comp + ',\n'

  text += '''
  ],
})
export class Users${year}Module { }
'''
  textTempl = Template(text)
  return textTempl.substitute(year=str(year))

def html():
  return '''
<h1>{{uni}}. {{title}} {{month}}</h1>

<div style="justify-content:center">

<div class="pct-table">
  <table mat-table [dataSource]="dataSource" matSort>

  <ng-container matColumnDef="userID">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>User ID</th>
    <td mat-cell *matCellDef="let element">{{element.userID}}</td>
  </ng-container>

  <ng-container matColumnDef="email">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>
    <td mat-cell *matCellDef="let element">{{element.email}}</td>
  </ng-container>

  <ng-container matColumnDef="pcts">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>Pct</th>
    <td mat-cell *matCellDef="let element">{{element.pcts}} %</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColums"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColums"></tr>
  </table>

  <google-chart #chart
    [type]="type"
    [data]="data"
    [columnNames]="columnNames"
    [options]="options"
    [width]="width"
    [height]="height">
  </google-chart>
</div>
</div>
'''

def component(prefix, year, month):
  if month == -1:
    dataObj = 'udata_' + str(year)
    htmlUrl = 'year.component.html'
    component = (prefix + str(year) + 'Component').title()
    mnth = '""'
  else:
    dataObj = 'udata_' + str(year) + '_' + str(month)
    htmlUrl = str(month) + '.component.html'
    component = (prefix + str(year) + str(month) + 'Component').title()
    mnth = 'months[' + str(month) + ']'

  textTempl = Template('''
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { DataObject } from '../../../_helpers/users.methods';
import { users_chart_opt, months } from '../../../_helpers/add_data';
import { uniPrefixes } from '../../../_helpers/uni_prefixes';
import { ${dataObj} } from '../../../_data/${year}';

const prefix:string = '${prefix}'
const Data = new DataObject();

@Component({
  templateUrl: '${htmlUrl}'
})
export class ${component} implements OnInit {
  private TABLE_DATA = Data.uniData(${dataObj}, prefix);

  private chart_data:any[] = Data.getChartData(this.TABLE_DATA);

  public uni:string = uniPrefixes.find(element => {
    return element.prefix === prefix
  }).name;

  public month:string = ${mnth};
  public title:string = "Unique users workload for ${year}:";

  public displayedColums:string[] = ['userID', 'email', 'pcts'];
  public dataSource = new MatTableDataSource(this.TABLE_DATA);

  // Pie chart
  public type = 'PieChart';
  public data = this.chart_data;
  public columnNames = users_chart_opt.columnNames;
  public options = users_chart_opt.options;
  public width = users_chart_opt.width;
  public height = users_chart_opt.height;

  @ViewChild(MatSort) sort : MatSort;

  ngOnInit () {
    this.dataSource.sort = this.sort;
  }
}
''')
  return textTempl.substitute(year=year, mnth=mnth, dataObj=dataObj,
    htmlUrl=htmlUrl, component=component, prefix=prefix)

def createFiles(year):
  outFolder = os.path.join(outputFolder, str(year))

  if not os.path.exists(outFolder): os.makedirs(outFolder)
  routerFile = os.path.join(outFolder, str(year) + '.router.ts')
  with open(routerFile, 'w') as routerF:
    routerF.write(router(year))

  moduleFile = os.path.join(outFolder, str(year) + '.module.ts')
  with open (moduleFile, 'w') as moduleF:
    moduleF.write(module(year))

  for prefix in hawPrefixes:
    if uniData(prefix, year, -1) != -1:
      writeComponents(prefix, year, -1)
    for month in range(1,13):
      if uniData(prefix, year, month) != -1:
        writeComponents(prefix, year, month)

def writeComponents(prefix, year, month):
  componentFolder = os.path.join(outputFolder, str(year), prefix)
  if not os.path.exists(componentFolder): os.makedirs(componentFolder)
  fileBaseName = 'year.component' if month == -1 else str(month) + '.component'
  with open(os.path.join(componentFolder, fileBaseName + '.ts'), 'w') as f:
    f.write(component(prefix, year, month))
  with open(os.path.join(componentFolder, fileBaseName + '.html'), 'w') as f:
    f.write(html())

def main (argv):
  try:
    opts, args = getopt.getopt(argv, "y:")
  except getopt.GetoptError:
    print ('users.components.py -y <year>')
    sys.exit(2)
  for opt, arg in opts:
    if opt == '-y':
      createFiles(arg)

if __name__ == "__main__":
  main(sys.argv[1:])
