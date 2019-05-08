import { Component } from '@angular/core';

import { uca_2017_07 } from '../../_data/bwUniData_2017';
import { total_uca_2017 } from '../../_data/total';
import { months,
         pie_chart_opt
       } from '../../_helpers/add_data';

// get data
let data:any[] = [];
uca_2017_07.forEach( (row) => {
  data.push([row.prefix, row.cost]);
});

@Component({
  selector: 'data-2017-7',
  templateUrl: '7.component.html'
})
export class Month7Component {
  public year = 2017;
  public mnth:number = 7;
  public haw_data = uca_2017_07;

  public title = pie_chart_opt.title;
  public cardHeader = pie_chart_opt.headerCard;
  public month = months[this.mnth];
  public tcc_total = total_uca_2017.find(item => item.year === this.year &&
    item.month === this.mnth)

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
