
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { DataObject } from '../../../_helpers/users.methods';
import { users_chart_opt, months } from '../../../_helpers/add_data';
import { uniPrefixes } from '../../../_helpers/uni_prefixes';
import { udata_2018_11 } from '../../../_data/2018';

const prefix:string = 'hu'
const Data = new DataObject();

@Component({
  templateUrl: '11.component.html'
})
export class Hu201811Component implements OnInit {
  private TABLE_DATA = Data.uniData(udata_2018_11, prefix);

  private chart_data:any[] = Data.getChartData(this.TABLE_DATA);

  public uni:string = uniPrefixes.find(element => {
    return element.prefix === prefix
  }).name;

  public month:string = months[11];
  public title:string = "Unique users workload for 2018:";

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
