export const pie_chart_opt = {
  titleAnnual: "HAWs utilized cluster capacity (UCC) distribution in",
  title: "HAWs utilized cluster capacity (UCC) in ",
  headerCard: "HAWs UCC distribution",
  columnNames: ['University', 'Percentage'],
  width: 800,
  height: 500,
  pieHole: 0.4,
  fontName: 'K2D',
  fontSize: 18,
  colors: ['#ff1744', '#651fff', '#0091ea', '#43a047', '#78909c', '#ad1457',
           '#00796b', '#827717', '#2962ff', '#8d6e63', '#d500f9'],
  legend: {
    position: 'bottom'
  }
}

export const users_chart_opt = {
  columnNames: ['User ID', 'Total costs'],
  options: {
    pieHole: 0.4,
    fontName: 'K2D',
    fontSize: 18,
    colors: ['#ff1744', '#651fff', '#0091ea', '#43a047', '#78909c', '#ad1457',
             '#00796b', '#827717', '#2962ff', '#8d6e63', '#d500f9'],
    legend: {
      position: 'right'
    }
  },
  width: 800,
  height: 500,
}

export const total_opt = {
  titile: "Utilized cluster capacity (UCC) by all HAWs in",
  headerCard: "Monthly HAWs UCC in percentage",
  fontName: 'K2D',
  fontSize: 16,
  colors: ['#00897b'],
  columnNames: ['Month', 'Percentage'],
  chartWidth: 900,
  chartHeight: 500
}

export const months = [
  'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

export const total_uca_2017 = [
  //{year: 2017, month: 2, haw: 1.58, total: 94.44 },
  //{year: 2017, month: 3, haw: 1.32, total: 88.80 },
  //{year: 2017, month: 4, haw: 0.25, total: 91.23 },
  {year: 2017, month: 5, haw: 0.58, total: 86.98 },
  {year: 2017, month: 6, haw: 1.71, total: 80.40 },
  {year: 2017, month: 7, haw: 1.27, total: 89.28 },
  {year: 2017, month: 8, haw: 3.67, total: 91.05 },
  {year: 2017, month: 9, haw: 1.17, total: 84.64 },
  {year: 2017, month: 10, haw: 1.20, total: 88.11 },
  {year: 2017, month: 11, haw: 4.36, total: 88.05 },
  {year: 2017, month: 12, haw: 2.89, total: 91.48 }
]

export const total_uca_2018 = [
  {year: 2018, month: 1, haw: 1.38, total: 88.46 },
  {year: 2018, month: 2, haw: 0.38, total: 85.73 },
  {year: 2018, month: 3, haw: 2.11, total: 83.81 },
  {year: 2018, month: 4, haw: 2.57, total: 77.98 },
  {year: 2018, month: 5, haw: 1.65, total: 79.59 },
  {year: 2018, month: 6, haw: 3.63, total: 77.76 },
  {year: 2018, month: 7, haw: 4.68, total: 83.04 },
  {year: 2018, month: 8, haw: 4.37, total: 85.56 },
  {year: 2018, month: 9, haw: 1.68, total: 91.50 },
  {year: 2018, month: 10, haw: 2.96, total: 76.80 },
  {year: 2018, month: 11, haw: 3.50, total: 95.81 },
  {year: 2018, month: 12, haw: 2.03, total: 93.52 }
]

export const total_uca_2019 = [
  {year: 2019, month: 1, haw: 6.24, total: 90.71 },
  {year: 2019, month: 2, haw: 5.24, total: 90.71 }
]
