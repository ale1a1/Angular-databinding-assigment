import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Input() isGameRunning;
  @Output() startGame = new EventEmitter();
  @Output() stopGame = new EventEmitter();
  onStartGame() {
    this.startGame.emit();
  }
  onStopGame() {
    this.stopGame.emit();
  }
}
