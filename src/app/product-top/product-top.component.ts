import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-product-top',
  templateUrl: './product-top.component.html',
  styleUrls: ['./product-top.component.css']
})
export class ProductTopComponent {
  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        borderRadius: 7,
        innerSize: '97%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '50%'

    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'Men', y: 1, color: 'lightblue' },

          { name: 'Electronics', y: 2, color: '#393e46' },

          { name: 'Women', y: 3, color: '#00adb5' },

        ],
      },
    ],
  })
}
