import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  number = 0;
  oddNumbers = [];
  evenNumbers = [];
  interval;

  onGameStarted() {
    this.interval = setInterval(() => {
      console.log(this.number), this.checkNumber(), this.number++;
    }, 1000);
  }

  onGameStopped() {
    clearInterval(this.interval);
    console.log(this.number);
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
