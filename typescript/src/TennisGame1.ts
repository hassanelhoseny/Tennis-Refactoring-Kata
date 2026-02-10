import { TennisGame } from "./TennisGame";

const First_player_Name: string = "player1";
const Second_player_Name: string = "player2";

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;

  wonPoint(playerName: string): void {
    if (playerName === First_player_Name) this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) {
    return this.m_score1 < 3 ? `${this.scoreToText(this.m_score1)}-All` : "Deuce";
    }
     if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) return   `Advantage ${First_player_Name}`;
      if (minusResult === -1)  return  `Advantage ${Second_player_Name}`;
      if (minusResult >= 2) return  `Win for ${First_player_Name}`;
       return `Win for ${Second_player_Name}`;
    } 
    return `${this.scoreToText(this.m_score1)}-${this.scoreToText(this.m_score2)}`;
  }

  private scoreToText(score: number): string {
    switch (score) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
      default:
        return "";
    }
  }
}
