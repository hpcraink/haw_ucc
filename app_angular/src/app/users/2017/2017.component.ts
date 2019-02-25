
import { Component, OnInit } from '@angular/core';

import { DataObject } from '../../_helpers/users.methods';
//import { udata_2017, udata_2017_5 } from '../../_data/2017';
import * as db from '../../_data/2017';
import { months } from '../../_helpers/add_data';

const monthlyData = [
  { month: -1, data: db.udata_2017 },
  { month: 5, data: db.udata_2017_5 }
];

const Data = new DataObject(monthlyData);
const TABLE_DATA = Data.tableData(db.udata_2017_5);

@Component({
  selector: 'users-2017-root',
  templateUrl: './2017.component.html'
})
export class Users2017Component implements OnInit {
  constructor() {}

  public months = months.slice(5,6)
  //.unshift('total');

  displayedColums:string[] = ["name", "users"]
  dataSource = TABLE_DATA;

  ngOnInit() {
    console.log(Data.fullTableData(monthlyData));
  }
}
