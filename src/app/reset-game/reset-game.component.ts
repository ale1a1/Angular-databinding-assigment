import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset-game',
  templateUrl: './reset-game.component.html',
  styleUrls: ['./reset-game.component.css'],
})
export class ResetGameComponent {
  @Output() resetGame = new EventEmitter();
  onResetGame() {
    this.resetGame.emit();
  }
}
