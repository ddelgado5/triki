import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor() { 
  }

  playersForm!: FormGroup;

  ngOnInit(): void {
    this.playersForm = new FormGroup({
      playerOne: new FormControl("",[Validators.required, Validators.maxLength(10)]),
      playerTwo: new FormControl("",[Validators.required, Validators.email]),
    });
  }

  entryPlayers(){

// destructuracion de objetos
    const {playerOne, playerTwo} = this.playersForm.value;

    console.log("player 1", playerOne);
    console.log("player 2", playerTwo);
  }

}
