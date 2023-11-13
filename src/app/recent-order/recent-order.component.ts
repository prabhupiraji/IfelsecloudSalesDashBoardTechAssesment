import { Component, OnInit } from '@angular/core';
import { Recentordermodel } from '../recentordermodel';
import { RecentordersService } from '../recentorders.service';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent  {

  recentorders: Recentordermodel[];
   constructor(private service:RecentordersService){}

   
  ngOnInit():void { 
        this.getallbokings();
         
    }
      private getallbokings(){
        this.service.getorderList().subscribe(data => {
          this.recentorders = data;
          console.log(this.recentorders);  
        });
      }
    




  // recentorder1 = [
  //   {
  //     "id": "1",
  //     "name": "Frank Goodman",
  //     "product": "Laptop",
  //     "delivery_date": "2023-10-25T17:44:25Z",
  //     "status": "Paid",
  //     "tracking_no": "K8085820",
  //     "shipping": true
  //   },
  //   {
  //     "id": "2",
  //     "name": "Hester Dickson",
  //     "product": "Display",
  //     "delivery_date": "2023-08-28T01:04:58Z",
  //     "status": "Failed",
  //     "tracking_no": "D2497252",
  //     "shipping": true
  //   },
  //   {
  //     "id": "3",
  //     "name": "Katina Thompson",
  //     "product": "Speakers",
  //     "delivery_date": "2023-11-09T03:31:09Z",
  //     "status": "Pending",
  //     "tracking_no": "K6760208",
  //     "shipping": false
  //   },
  //   {
  //     "id": "4",
  //     "name": "Rosie Hood",
  //     "product": "Mobile",
  //     "delivery_date": "2023-11-27T06:43:08Z",
  //     "status": "Pending",
  //     "tracking_no": "D3116813",
  //     "shipping": true
  //   },
  //   {
  //     "id": "5",
  //     "name": "Darlene Cannon",
  //     "product": "Display",
  //     "delivery_date": "2023-07-18T23:35:59Z",
  //     "status": "Paid",
  //     "tracking_no": "K5027868",
  //     "shipping": true
  //   },
  //   {
  //     "id": "6",
  //     "name": "Dona Owens",
  //     "product": "Mobile",
  //     "delivery_date": "2023-11-04T21:47:45Z",
  //     "status": "Pending",
  //     "tracking_no": "D7670094",
  //     "shipping": true
  //   },
  //   {
  //     "id": "7",
  //     "name": "Cherry Boyd",
  //     "product": "Watch",
  //     "delivery_date": "2023-10-25T23:26:52Z",
  //     "status": "Paid",
  //     "tracking_no": "D5792264",
  //     "shipping": false
  //   },
    // {
    //   "id": "8",
    //   "name": "Kristi Stevenson",
    //   "product": "Speakers",
    //   "delivery_date": "2023-09-13T09:55:55Z",
    //   "status": "Paid",
    //   "tracking_no": "K2651667",
    //   "shipping": false
    // }
  // ]
  // constructor() { }

  // ngOnInit(): void {
  // }
}

