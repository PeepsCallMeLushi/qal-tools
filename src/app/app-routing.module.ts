import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mtg/set-list'
  },
  { 
    path: 'mtg',
    loadChildren: () => import('./mtg-tool/mtg-tool.module').then(m => m.MtgToolModule)
  },
  {
    path: 'nikke',
    loadChildren: () => import('./nikke/nikke.module').then(m => m.NikkeModule)
  },
  {
    path: 'lol',
    loadChildren: () => import('./league/league.module').then(m => m.LeagueModule)
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
