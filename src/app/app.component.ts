import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes = [
  
  new Hero(1,'windStorm'),
  new Hero(2,'excuse me'),
  new Hero(3,'myself'),
  new Hero(4,'yourself')]

  myHero = this.heroes[0];
}
