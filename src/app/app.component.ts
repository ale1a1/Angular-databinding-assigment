import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  number = 0;
  interval;

  onGameStarted() {
    this.interval = setInterval(() => {
      console.log(this.number), this.number++;
    }, 1000);
  }

  onGameStopped() {
    clearInterval(this.interval);
    this.number = 0;
    console.log(this.number);
  }
}
