import { useContext } from "react";
import ActiveMatchContext from "../ActiveMatchContext";

function TurnInformation() {
  const { isPlayersTurn } = useContext(ActiveMatchContext);

  return (
    <div className="turnInformation">
      <h3>{isPlayersTurn ? "Your Move..." : "Opponent's Move..."}</h3>
    </div>
  );
}

export default TurnInformation;
