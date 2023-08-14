import { Component } from '@angular/core';

interface Team {
  name: string;
  wins: number;
}

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent {
  teams: Team[] = [];
  winnersA: Team[] = [];
  winnersB: Team[] = [];
  finalWinner: Team | null = null;
  gameResults: { team1: string, team2: string, winner: string }[] = [];
  tournamentPlayed: boolean = false;

  availableTeamNames: string[] = [
    "Reino Carcassone",
    "Reino Munchkin",
    "Reino Trolley",
    "Reino Splendor"
  ];

  addTeam() {
    if (this.teams.length < 4) {
      const randomIndex = Math.floor(Math.random() * this.availableTeamNames.length);
      const randomTeamName = this.availableTeamNames.splice(randomIndex, 1)[0];
      this.teams.push({ name: randomTeamName, wins: 0 });
    }
  }

  playTournament() {
    this.winnersA = [];
    this.winnersB = [];

    // play the first match (Chave 1)
    const winnerChave1 = this.playMatch(this.teams[0], this.teams[1]);
    this.winnersA.push(winnerChave1);

    // play the second match (Chave 2)
    const winnerChave2 = this.playMatch(this.teams[2], this.teams[3]);
    this.winnersB.push(winnerChave2);

    // Show game result 1
    this.gameResults.push({
      team1: this.teams[0].name,
      team2: this.teams[1].name,
      winner: `Vencedor Chapa 1: ${winnerChave1.name}`
    });

    // Show game result 2
    this.gameResults.push({
      team1: this.teams[2].name,
      team2: this.teams[3].name,
      winner: `Vencedor Chapa 2: ${winnerChave2.name}`
    });

    // Play final between bracket winners
    this.finalWinner = this.playMatch(this.winnersA[0], this.winnersB[0]);

    // Show final game result
    this.gameResults.push({
      team1: this.winnersA[0].name,
      team2: this.winnersB[0].name,
      winner: ""
    });

    this.tournamentPlayed = true;
  }

  playMatch(team1: Team, team2: Team): Team {
    const randomWinner = Math.random() < 0.5 ? team1 : team2;
    randomWinner.wins++;
    return randomWinner;
  }

  //Reset the tournament

  resetTournament() {
    this.teams = [];
    this.winnersA = [];
    this.winnersB = [];
    this.finalWinner = null;
    this.gameResults = [];
    this.tournamentPlayed = false;
    this.availableTeamNames = [
      "Reino Carcassone",
      "Reino Munchkin",
      "Reino Trolley",
      "Reino Splendor"
    ];
  }
}
