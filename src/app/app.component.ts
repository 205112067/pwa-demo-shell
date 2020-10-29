import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PWA Demo';
  joke: any;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getJoke();
    setInterval(() => this.getJoke(), 10 * 1000);
  }

  getJoke() {
    this.dataService.getJoke().subscribe((_joke) => {
      this.joke = _joke;
    });
  }
}
