import { useContext } from "react";
import GameContext from "../GameContext";

interface IMatchInformation {
  playerOneScore: number;
  playerTwoScore: number;
  turnsRemaining: number;
  cardsRemaining: number;
}

function MatchInformationHeader(matchInfo: IMatchInformation) {
  const { playerNumber } = useContext(GameContext);
  return (
    <div className="matchInfoHeader">
      <div className="matchInfoItem">
        <h3>You</h3>
        <p>
          {playerNumber === 1
            ? matchInfo.playerOneScore
            : matchInfo.playerTwoScore}
        </p>
      </div>
      <div className="matchInfoItem">
        <h3>Opponent</h3>
        <p>
          {playerNumber === 1
            ? matchInfo.playerTwoScore
            : matchInfo.playerOneScore}
        </p>
      </div>
      <div className="matchInfoItem">
        <h3>Turns Left</h3>
        <p>{matchInfo.turnsRemaining}</p>
      </div>
      <div className="matchInfoItem">
        <h3>Cards Remaining</h3>
        <p>{matchInfo.cardsRemaining}</p>
      </div>
    </div>
  );
}
export default MatchInformationHeader;
