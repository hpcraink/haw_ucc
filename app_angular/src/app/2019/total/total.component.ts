import { Component } from '@angular/core';

import { total_uca_2019 } from '../../_data/total';
import { months, total_opt } from './../../_helpers/add_data';

// get data
let data:any[] = [];
total_uca_2019.forEach( (row) => {
  data.push([months[row.month], row.haw]);
});

@Component({
  selector: 'data-2019-total',
  templateUrl: 'total.component.html'
})
export class TotalComponent {
  public year = 2019;
  public title = total_opt.titile;
  public cardHeader = total_opt.headerCard;

  // Pie chart
  public type = 'AreaChart';
  public data = data;
  public columnNames = total_opt.columnNames;
  public options = {
    colors: total_opt.colors,
    vAxis: {
      ticks: [1.5, 3, 4.5, 6, 7.5],
      textStyle: {
        fontName: total_opt.fontName,
        fontSize: total_opt.fontSize
      }
    },
    hAxis: {
      textPosition: 'out',
      textStyle: {
        fontName: total_opt.fontName,
        fontSize: total_opt.fontSize
      },
      slantedText: true
    },
    legend: {
      textStyle: {
        fontName: total_opt.fontName,
        fontSize: total_opt.fontSize
      },
      position: "top"
    }
  };
   width = total_opt.chartWidth;
   height = total_opt.chartHeight;
}
