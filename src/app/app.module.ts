import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-key';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AboutComponent } from './about/about.component';
import { RolesPipe } from './pipes/roles.pipe'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    NewPlayerComponent,
    PlayerDetailComponent,
    EditPlayerComponent,
    AboutComponent,
    RolesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
