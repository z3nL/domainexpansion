import GameContext from "./GameContext";
import { useContext } from "react";

function EndOfMatch() {
  const { matchStatus } = useContext(GameContext);

  if (!matchStatus) {
    return <div className="endOfMatch">No match data available.</div>;
  }

  return (
    <div className="endOfMatch">
      <h1>Game Over</h1>
      <h2>Winner: {matchStatus.winner}</h2>
      <div className="finalScores">
        <p>Player One: {matchStatus.playerOneScore}</p>
        <p>Player Two: {matchStatus.playerTwoScore}</p>
      </div>
    </div>
  );
}

export default EndOfMatch;
