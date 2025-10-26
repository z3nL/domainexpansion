interface IMatchPayload {
  type: string;
  playerOneScore: number;
  playerTwoScore: number;
  currentTurn: number;
  isGameOver: boolean;
  winner: "player one" | "player two" | "no one";
}

export type { IMatchPayload };
