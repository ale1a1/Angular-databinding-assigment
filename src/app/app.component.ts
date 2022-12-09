import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  number = 0;
  isGameRunning = false;
  hasGameStarted = false;
  oddNumbers = [];
  evenNumbers = [];
  interval;

  onGameStarted() {
    this.isGameRunning = true;
    this.hasGameStarted = true;
    this.interval = setInterval(() => {
      this.checkNumber();
      this.number++;
    }, 1000);
  }

  onGameStopped() {
    clearInterval(this.interval);
    this.isGameRunning = false;
  }

  onGameReset() {
    clearInterval(this.interval);
    this.oddNumbers = [];
    this.evenNumbers = [];
    this.number = 0;
  }

  checkNumber() {
    this.number % 2 === 0
      ? this.evenNumbers.push(this.number)
      : this.oddNumbers.push(this.number);
    console.log(this.oddNumbers, this.evenNumbers);
  }
}
