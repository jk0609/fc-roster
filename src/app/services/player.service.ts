import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {

  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers(){
    return this.players;
  }

  getPlayerByKey(key){
    return this.database.object('players/' + key);
  }

  addPlayer(player){
    this.players.push(player);
  }

  updatePlayer(player){
    var playerInFirebase = this.getPlayerByKey(player.$key);
    playerInFirebase.update({
      name: player.name,
      character: player.character,
      rank: player.rank,
      role: player.role,
      imageURL: player.imageURL
    });
  }

  deletePlayer(player){
    this.getPlayerByKey(player.$key).remove();
  }
}
