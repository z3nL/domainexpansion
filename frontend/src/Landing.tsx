import "./Landing.css";
import { useContext } from "react";
import GameContext from "./GameContext";

function Landing() {
  const { setCurrentPage } = useContext(GameContext);
  return (
    <>
      <h1>Domain Expansion</h1>
      <div className="landingOptions">
        <button
          className="landingButton"
          onClick={() => setCurrentPage("activeMatch")}
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
