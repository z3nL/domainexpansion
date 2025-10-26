import { useState, useContext } from "react";
import GameContext from "./GameContext";
import EditDeck from "./EditDeck";
import ActiveMatch from "./ActiveMatch";
import Landing from "./Landing";
import type { ICard } from "./game/cards";
import { randomDeck } from "./game/decks";
import { useWebSocket } from "./game/useWebSocket";

function App() {
  const [deck, setDeck] = useState<ICard[]>([]);
  const [currentPage, setCurrentPage] = useState<
    "landing" | "activeMatch" | "editDeck" | "waitingForGame"
  >("landing");

  const [gameId, setGameId] = useState<string>("");

  // Websocket Connection
  const { isConnected, sendMessage } = useWebSocket ({
    url: 'ws://localhost:8080/',
    onMessage: (data) => {
      console.log('Recieved from server: ', data);

      // Different Message Handling
      if (data.type === "gameCreated") {
        setGameId(data.gameId);
        setCurrentPage("activeMatch");
      } else if (data.type === "gameJoined") {
        setGameId(data.gameId);
        setCurrentPage("activeMatch");
      } else if (data.type === "opponentMove") {
        console.log("Opponent played:", data);
      }
    },
       onOpen: () => {
      console.log('Connected to game server!');
    },
    onClose: () => {
      console.log('Disconnected from game server');
      if (currentPage === "waitingForGame") {
        setCurrentPage('landing');
      }
    },
    onError: (error) => {
      console.error('Connection error:', error);
    }
    
  });

  if (deck.length === 0) {
    setDeck(randomDeck());
  }

  return (
    <>
      <GameContext.Provider value={{ setCurrentPage, deck, setDeck, currentPage, gameId, setGameId, isConnected, sendGameMessage: sendMessage }}>
        {currentPage === "landing" && <Landing />}
        {currentPage === "waitingForGame" && <WaitingForGame />}
        {currentPage === "activeMatch" && <ActiveMatch />}
        {currentPage === "editDeck" && <EditDeck />}
      </GameContext.Provider>
    </>
  );
}
// Waiting page
function WaitingForGame() {
  const { setCurrentPage, isConnected } = useContext(GameContext);
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      gap: '2rem'
    }}>
      <h1>Waiting for Game...</h1>
      <div className="spinner">⏳</div>
      <p>{isConnected ? 'Connected - Creating game...' : 'Connecting to server...'}</p>
      <button 
        className="landingButton"
        onClick={() => setCurrentPage('landing')}
      >
        Cancel
      </button>
    </div>
  );
}

export default App;
