import { Component } from '@angular/core';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faMoon} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  faYoutube=faYoutube;
  faMoon = faMoon;
}
