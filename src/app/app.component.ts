import { Component, ElementRef, ViewChild } from '@angular/core';
import { routeState } from './animations/animations';
import { faChevronUp, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeState]
})
export class AppComponent {

  @ViewChild('container') container: ElementRef;

  faChevronUp = faChevronUp;
  faHeart = faHeart;

  scrollToTop() {
    //this will provide smooth animation for the scroll
    this.container.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
