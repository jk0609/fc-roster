import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
  }

  updatePlayer(player){
    this.playerService.updatePlayer(player);
  }
  deletePlayer(player){
    this.playerService.deletePlayer(player);
  }

}
