import "./Landing.css";
import { useContext } from "react";
import GameContext from "./GameContext";

function Landing() {
  const { setCurrentPage, isConnected, sendGameMessage } =
    useContext(GameContext);

  const handleNewGame = () => {
    if (!isConnected) {
      alert("Not connected to server");
      return;
    }

    // TODO override
    //setCurrentPage("waitingForGame");
    setCurrentPage("activeMatch");

    sendGameMessage?.({
      type: "createGame",
      timestamp: Date.now(),
    });
  };

  return (
    <>
      <h1>Domain Expansion</h1>

      <div className="connection-status">
        {isConnected ? "🟢 Connected to Server" : "🔴 Disconnected from Server"}
      </div>

      <div className="landingOptions">
        <button
          className="landingButton"
          onClick={handleNewGame}
          disabled={!isConnected}
        >
          New Game
        </button>
        <button
          className="landingButton"
          onClick={() => setCurrentPage("editDeck")}
        >
          Edit Deck
        </button>
      </div>
      <footer className="landingFooter">
        <p>by Marrion Forrest, Dillon Wilson, and Zen Lambertus</p>
      </footer>
    </>
  );
}

export default Landing;
