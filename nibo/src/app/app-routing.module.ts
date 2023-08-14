import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  { path: '', redirectTo: 'tournament-details', pathMatch: 'full' },
  { path: 'tournament', component: TournamentComponent },
  { path: 'tournament-details', component: TournamentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
