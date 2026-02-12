import { TennisGame } from "./TennisGame";
import { First_player_Name, Second_player_Name  , SCORE_TEXT } from "./constants/TennisGameConstant";

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;

  wonPoint(playerName: string): void {
    if (playerName === First_player_Name) this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) {
    return this.m_score1 < 3 ? `${this.getEqualScore(this.m_score1)}-All` : "Deuce";
    }
     if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      const scoreDifference: number = this.m_score1 - this.m_score2;
      if (scoreDifference === 1) return   `Advantage ${First_player_Name}`;
      if (scoreDifference === -1)  return  `Advantage ${Second_player_Name}`;
      if (scoreDifference >= 2) return  `Win for ${First_player_Name}`;
       return `Win for ${Second_player_Name}`;
    } 
    return `${this.getEqualScore(this.m_score1)}-${this.getEqualScore(this.m_score2)}`;
  }

  private getEqualScore(score: number): string {
   return SCORE_TEXT[score] ;
  }
}
