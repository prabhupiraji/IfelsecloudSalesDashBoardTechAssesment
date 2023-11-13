import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newuser-registration',
  templateUrl: './newuser-registration.component.html',
  styleUrls: ['./newuser-registration.component.scss']
})
export class NewuserRegistrationComponent {
  @Input()
  progress!: number;
  new_users= [
    {
      "id": "459ad60f-06b2-4b8a-9df9-5090febcc694",
      "picture": "http://placehold.it/32x32",
      "name": "Lucile French",
      "isActive": false,
      "country": "Afghanistan",
      "progress": 42
    },
    {
      "id": "31481076-4d1a-4820-b7c5-b94e2e83e5fd",
      "picture": "http://placehold.it/32x32",
      "name": "Amber Graham",
      "isActive": true,
      "country": "El Salvador",
      "progress": 51
    },
    {
      "id": "7361160e-47ee-4e6a-9411-8af0f2440c85",
      "picture": "http://placehold.it/32x32",
      "name": "Elisa Salazar",
      "isActive": false,
      "country": "Cayman Islands",
      "progress": 99
    },
    {
      "id": "b03db609-c1a9-45d0-8bae-4862aaa1915f",
      "picture": "http://placehold.it/32x32",
      "name": "Minnie Colon",
      "isActive": true,
      "country": "Antarctica",
      "progress": 43
    },
    
  ]
}
