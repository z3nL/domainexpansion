import { createContext } from "react";
import type { ICard } from "./game/cards";

interface ActiveMatchContextType {
  matchDeck: ICard[];
  setMatchDeck: (deck: ICard[]) => void;
  currentHand: ICard[];
  setCurrentHand: (hand: ICard[]) => void;
  maxHandSize: number;
  selectedConstants: ICard[];
  setSelectedConstants: (cards: ICard[]) => void;
  playerOneScore: number;
  setPlayerOneScore: (score: number) => void;
  playerTwoScore: number;
  setPlayerTwoScore: (score: number) => void;
  beginNextTurn: () => number;
  isPlayersTurn: boolean;
}

const ActiveMatchContext = createContext<ActiveMatchContextType>({
  matchDeck: [],
  setMatchDeck: () => {},
  currentHand: [],
  setCurrentHand: () => {},
  maxHandSize: 6,
  selectedConstants: [],
  setSelectedConstants: () => {},
  playerOneScore: 0,
  setPlayerOneScore: () => {},
  playerTwoScore: 0,
  setPlayerTwoScore: () => {},
  beginNextTurn: () => 0,
  isPlayersTurn: false,
});

export default ActiveMatchContext;
