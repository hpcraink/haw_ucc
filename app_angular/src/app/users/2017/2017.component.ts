
import { Component, OnInit } from '@angular/core';

import { DataObject } from '../../_helpers/users.methods';
import * as db from '../../_data/2017';

const monthlyData = [
  { month: -1, data: db.udata_2017 },
  { month: 5, data: db.udata_2017_5 },
  { month: 6, data: db.udata_2017_6 },
  { month: 7, data: db.udata_2017_7 },
  { month: 8, data: db.udata_2017_8 },
  { month: 9, data: db.udata_2017_9 },
  { month: 10, data: db.udata_2017_10 },
  { month: 11, data: db.udata_2017_11 },
  { month: 12, data: db.udata_2017_12 }
];

const Data = new DataObject(monthlyData);
const TABLE_DATA = Data.yearlyUsers(monthlyData);

@Component({
  selector: 'users-2017-root',
  templateUrl: './2017.component.html'
})
export class Users2017Component implements OnInit {
  constructor() {}

  public months:string[] = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Year"];

  public displayedColums:string[] = ['name'].concat(this.months);
  public dataSource = TABLE_DATA;

  ngOnInit() {
  }
}
