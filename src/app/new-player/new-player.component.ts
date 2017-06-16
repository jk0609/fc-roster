import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [PlayerService],
})
export class NewPlayerComponent implements OnInit {


  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
  }


  submitForm(name, char, rank, role, img){
    var newPlayer = new Player(name, char, rank, role, img);
    this.playerService.addPlayer(newPlayer);
  }
}
