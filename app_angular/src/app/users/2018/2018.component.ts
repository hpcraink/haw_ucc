
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { DataObject, YearlyUniUsers } from '../../_helpers/users.methods';
import * as db from '../../_data/2018';

const monthlyData = [
  { month: -1, data: db.udata_2018 },
  { month: 1, data: db.udata_2018_1 },
  { month: 2, data: db.udata_2018_2 },
  { month: 3, data: db.udata_2018_3 },
  { month: 4, data: db.udata_2018_4 },
  { month: 5, data: db.udata_2018_5 },
  { month: 6, data: db.udata_2018_6 },
  { month: 7, data: db.udata_2018_7 },
  { month: 8, data: db.udata_2018_8 },
  { month: 9, data: db.udata_2018_9 },
  { month: 10, data: db.udata_2018_10 },
  { month: 11, data: db.udata_2018_11 },
  { month: 12, data: db.udata_2018_12 }
];

const Data = new DataObject();

@Component({
  selector: 'users-2018-root',
  templateUrl: './2018.component.html'
})
export class Users2018Component implements OnInit {
  constructor() {}

  private TABLE_DATA = Data.yearlyUsers(monthlyData);

  public months:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec", "Year"];

  public displayedColums:string[] = ['name'].concat(this.months);
  public dataSource: MatTableDataSource<YearlyUniUsers> =
    new MatTableDataSource(this.TABLE_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit () {
    this.dataSource.sort = this.sort;
  }
}
