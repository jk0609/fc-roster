import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService],
})
export class PlayerListComponent implements OnInit {

  players: FirebaseListObservable<any[]>;

  constructor(
    // private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
  }



}
