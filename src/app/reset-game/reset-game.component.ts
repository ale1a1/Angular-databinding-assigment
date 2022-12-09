import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-reset-game',
  templateUrl: './reset-game.component.html',
  styleUrls: ['./reset-game.component.css'],
})
export class ResetGameComponent {
  @Input() hasGameStarted;
  @Output() resetGame = new EventEmitter();
  onResetGame() {
    this.resetGame.emit();
  }
}
