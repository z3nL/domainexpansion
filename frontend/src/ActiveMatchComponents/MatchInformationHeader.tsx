interface IMatchInformation {
  hostScore: number;
  guestScore: number;
  turnsRemaining: number;
  cardsRemaining: number;
}

function MatchInformationHeader(matchInfo: IMatchInformation) {
  // TODO state variables for player scores, turns left, and cards remaining
  return (
    <div className="matchInfoHeader">
      <div className="matchInfoItem">
        <h3>You</h3>
        <p>{matchInfo.hostScore}</p>
      </div>
      <div className="matchInfoItem">
        <h3>Opponent</h3>
        <p>{matchInfo.guestScore}</p>
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
