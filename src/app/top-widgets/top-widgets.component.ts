import { Component } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent {

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  constructor() { }

  ngOnInit(): void {
  }

  "top_cards": [
    {
      "header": "Saving for Car Loan",
      "sub_header": "30% higher than last year",
      "value": 15
    },
    {
      "header": "Saving for Home Loan",
      "sub_header": "15% lower than last year",
      "value": 30
    },
    {
      "header": "Saving for Personal Loan",
      "sub_header": "5% higher than last year",
      "value": 35
    },
    {
      "header": "Saving for Study Loan",
      "sub_header": "10% higher than last year",
      "value": 9
    }
  ]

}
