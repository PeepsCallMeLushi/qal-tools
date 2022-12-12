import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PlayerRandomizerComponent } from './player-randomizer/player-randomizer.component';
import { PlayerListComponent } from './player-randomizer/player-list/player-list.component';
import { TeamListComponent } from './player-randomizer/team-list/team-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'player-randomizer',
  },
  {
    path: 'player-team-randomizer',
    component: PlayerRandomizerComponent,
  },
];

@NgModule({
  declarations: [
    PlayerRandomizerComponent,
    PlayerListComponent,
    TeamListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LeagueModule { }
