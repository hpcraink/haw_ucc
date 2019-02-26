import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { DataObject } from '../../../_helpers/users.methods';
import { users_chart_opt } from '../../../_helpers/add_data';
import { uniPrefixes } from '../../../_helpers/uni_prefixes';
import { udata_2017 } from '../../../_data/2017';


const prefix:string = 'aa'
const Data = new DataObject();
const TABLE_DATA = Data.uniData(udata_2017, prefix)

let chart_data:any[] = [];
TABLE_DATA.forEach((row) => {
  chart_data.push([row.userID, row.costs]);
});

@Component({
  templateUrl: './year.component.html'
})
export class Aa2017Component implements OnInit {

  public uni:string = uniPrefixes.find(element => {
    return element.prefix === prefix
  }).name

  public time:string = "2017"

  public displayedColums:string[] = ['userID', 'email', 'pcts']
  public dataSource = new MatTableDataSource(TABLE_DATA);

  // Pie chart
  public type = 'PieChart';
  public data = chart_data;
  public columnNames = users_chart_opt.columnNames;
  public options = users_chart_opt.options;
  public width = users_chart_opt.width;
  public height = users_chart_opt.height;

  @ViewChild(MatSort) sort : MatSort;

  ngOnInit () {
    this.dataSource.sort = this.sort;
  }
}
