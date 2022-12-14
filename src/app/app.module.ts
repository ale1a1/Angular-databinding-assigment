import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ResetGameComponent } from './reset-game/reset-game.component';

@NgModule({
  declarations: [AppComponent, InstructionsComponent, GameControlComponent, OddComponent, EvenComponent, ResetGameComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
