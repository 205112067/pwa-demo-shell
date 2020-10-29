import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PWA  Demo';
  isOnline = navigator.onLine;
  joke: any = null;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getJoke();
    setInterval(() => this.getJoke(), 5 * 1000);

    setInterval(() => {
      this.isOnline = navigator.onLine;
    }, 1 * 1000);
  }

  getJoke() {
    this.dataService.getJoke().subscribe((_joke) => {
      this.joke = _joke;
    });
  }
}
