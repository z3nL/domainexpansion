import { useState } from "react";
import GameContext from "./GameContext";
import EditDeck from "./EditDeck";
import ActiveMatch from "./ActiveMatch";
import Landing from "./Landing";
import type { Card } from "./game/cards";

function App() {
  const [deck, setDeck] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<
    "landing" | "activeMatch" | "editDeck"
  >("landing");

  return (
    <>
      <GameContext.Provider value={{ setCurrentPage, deck, setDeck }}>
        {currentPage === "landing" && <Landing />}
        {currentPage === "activeMatch" && <ActiveMatch />}
        {currentPage === "editDeck" && <EditDeck />}
      </GameContext.Provider>
    </>
  );
}

export default App;
