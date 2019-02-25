import { Component } from '@angular/core';

import { uca_2017_total } from '../../_helpers/bwUniData_2017';
import { pie_chart_opt } from '../../_helpers/add_data';

// get data
let data:any[] = [];
let annual:number = 0;
uca_2017_total.forEach( (row) => {
  data.push([row.prefix, row.cost]);
  annual = annual + row.cost;
});

//calculate percentage
let percentage:any[] = [];
uca_2017_total.forEach( (row) => {
  let pct:number = (row.cost * 100) / annual;
  percentage.push({
    prefix: row.prefix,
    pct: pct.toFixed(2)
  })
});

@Component({
  selector: 'data-2017-annual',
  templateUrl: 'annual.component.html'
})
export class AnnualComponent {
  public year = 2017;

  public title = pie_chart_opt.titleAnnual;
  public haw_data = percentage;
  public cardHeader = pie_chart_opt.headerCard;

  // Pie chart
  public type = 'PieChart';
  public data = data;
  public columnNames = pie_chart_opt.columnNames;
  public options = {
    pieHole: pie_chart_opt.pieHole,
    fontName: pie_chart_opt.fontName,
    fontSize: pie_chart_opt.fontSize,
    colors: pie_chart_opt.colors,
    legend: pie_chart_opt.legend
  };
   width = pie_chart_opt.width;
   height = pie_chart_opt.height;
}
