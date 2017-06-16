import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { PlayerDetailComponent }   from './player-detail/player-detail.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PlayerListComponent
  },
  {
    path: 'admin/new',
    component: NewPlayerComponent,
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
