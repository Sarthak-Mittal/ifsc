import { Component } from '@angular/core';
import { routeState } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeState]
})
export class AppComponent {
  

}
