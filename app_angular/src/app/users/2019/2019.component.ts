
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { DataObject, YearlyUniUsers } from '../../_helpers/users.methods';
import * as db from '../../_data/2019';

const monthlyData = [
  { month: -1, data: db.udata_2019 },
  { month: 1, data: db.udata_2019_1 },
  { month: 2, data: db.udata_2019_2 },
  { month: 3, data: db.udata_2019_3 },
];

const Data = new DataObject();

@Component({
  selector: 'users-2019-root',
  templateUrl: './2019.component.html'
})
export class Users2019Component implements OnInit {
  constructor() {}

  private TABLE_DATA = Data.yearlyUsers(monthlyData);

  public months:string[] = ["Jan", "Feb", "Mar", "Year"];

  public displayedColums:string[] = ['name'].concat(this.months);
  public dataSource: MatTableDataSource<YearlyUniUsers> =
    new MatTableDataSource(this.TABLE_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit () {
    this.dataSource.sort = this.sort;
  }
}
