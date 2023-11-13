import { Component } from '@angular/core';
import { faBell, faDashboard, faS ,faMessage, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faDashboard = faDashboard;
  faBell= faBell;
  faMessage=faMessage;
  faMagnifyingGlass=faMagnifyingGlass;
}
