import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PlayersComponent } from './modules/player/components/players/players.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { 
    path: 'player',
    component: PlayersComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
