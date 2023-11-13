import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';



@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.css']
})

export class BalanceOverviewComponent {

  
  constructor() { }


  public barChartOptions: ChartConfiguration['options'] ;
    responsive: true = true;
    
    // We use these empty structures as placeholders for dynamic theming.
    scales!: {
        xAxes: [{ stacked: true; }];
        yAxes: [{ stacked: true; }];
        ticks: {
            beginAtZero: true;
        };
    };
    plugins!: {
        datalabels: {
            anchor: 'end';
            align: 'end';
        };
    };
//   };
  public barChartType: ChartType = 'bar';
  // public barChartPlugins = [DataLabelsPlugin];
  public barChartLegend=true

  public barChartData: ChartData<'bar'> = {
    
    labels: ['jan', 'feb', 'mar', 'april', 'may', 'jun', 'july','aug','sept','oct','nov','dec'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40,90,50,60,40,70], label: 'Borrowed' },
      { data: [28, 48, 40, 19, 86, 27, 90,80,60,70,40,50], label: 'Earning' },
    ],
  };

// npm install --save-dev @types/highcharts
//  data = {
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//   datasets: [{
//     label: 'Weekly Sales',
//     data: [18, 12, 6, 9, 12, 3, 9],
//     backgroundColor: [
//       'rgba(255, 26, 104, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(255, 206, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(0, 0, 0, 0.2)'
//     ],
//     borderColor: [
//       'rgba(255, 26, 104, 1)',
//       'rgba(54, 162, 235, 1)',
//       'rgba(255, 206, 86, 1)',
//       'rgba(75, 192, 192, 1)',
//       'rgba(153, 102, 255, 1)',
//       'rgba(255, 159, 64, 1)',
//       'rgba(0, 0, 0, 1)'
//     ],
//     borderWidth: 1
//   }]
// };

// // config 
// // const config = {
// //   type: 'bar',
// //   this.data,
// //   options: {
// //     scales: {
// //       y: {
// //         beginAtZero: true
// //       }
// //     }
// //   }
// // };

// // render init block
//  myChart = new Chart(
//   document.getElementById('myChart'),
//   config
// );

}
