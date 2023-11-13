import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { elements } from 'chart.js';
import { range } from 'rxjs';

@Component({
  selector: 'app-sales-statistics',
  templateUrl: './sales-statistics.component.html',
  styleUrls: ['./sales-statistics.component.css']
})
export class SalesStatisticsComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }

  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Sales Statistics'
    },
    xAxis: {
      categories: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thur',
        'Fri',
        'Sat',
        
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "Arizona",
        type: "line",
        color: '#044342',
        data: [5, 15, 10, 28, 25, 35, 60]
      }
      
    ],
    credits: {
      enabled: false
    }
    
  })
}
