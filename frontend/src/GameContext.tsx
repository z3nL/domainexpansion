import { createContext } from "react";
import type { ICard } from "./game/cards";
import type { IMatchPayload } from "./matchPayload";

interface GameContextType {
  deck: ICard[];
  setDeck: (deck: ICard[]) => void;
  currentPage: "landing" | "activeMatch" | "editDeck" | "waitingForGame" | "endOfMatch";
  setCurrentPage: (
    page: "landing" | "activeMatch" | "editDeck" | "waitingForGame" | "endOfMatch",
  ) => void;
  gameId?: string;
  setGameId?: (id: string) => void;
  isConnected?: boolean;
  sendGameMessage: (data: any) => void;
  isPlayingCard: boolean;
  handlePlayCardModal: (card: ICard | null) => void;
  cardBeingPlayed: ICard | null;
  playerNumber: number;
  matchStatus: IMatchPayload | null;
  setMatchStatus: (status: IMatchPayload | null) => void;
}

const GameContext = createContext<GameContextType>({
  deck: [],
  setDeck: () => {},
  currentPage: "landing",
  setCurrentPage: () => {},
  sendGameMessage: () => {},
  isPlayingCard: false,
  handlePlayCardModal: () => {},
  cardBeingPlayed: null,
  playerNumber: 0,
  matchStatus: null,
  setMatchStatus: () => {},
});

export default GameContext;
