import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) { }

  playerKey = null;
  foundPlayer;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerKey = urlParameters['id'];
    });
    this.foundPlayer = this.playerService.getPlayerByKey(this.playerKey);
  }

}
