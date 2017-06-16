import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { NewPlayerComponent } from './new-player/new-player.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PlayerListComponent
  },
  {
    path: 'new',
    component: NewPlayerComponent,
  }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
