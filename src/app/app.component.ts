import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor () {}
  title = 'app works!';

}
