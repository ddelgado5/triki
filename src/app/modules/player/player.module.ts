import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './components/players/players.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PlayersComponent
  ]
})
export class PlayerModule { }
