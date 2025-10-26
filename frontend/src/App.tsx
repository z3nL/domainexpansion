import { useState } from "react";
import GameContext from "./GameContext";
import EditDeck from "./EditDeck";
import ActiveMatch from "./ActiveMatch";
import Landing from "./Landing";
import type { ICard } from "./game/cards";
import { randomDeck } from "./game/decks";

function App() {
  const [deck, setDeck] = useState<ICard[]>([]);
  const [currentPage, setCurrentPage] = useState<
    "landing" | "activeMatch" | "editDeck"
  >("landing");

  if (deck.length === 0) {
    setDeck(randomDeck());
  }

  return (
    <>
      <GameContext.Provider value={{ setCurrentPage, deck, setDeck, currentPage }}>
        {currentPage === "landing" && <Landing />}
        {currentPage === "activeMatch" && <ActiveMatch />}
        {currentPage === "editDeck" && <EditDeck />}
      </GameContext.Provider>
    </>
  );
}

export default App;
