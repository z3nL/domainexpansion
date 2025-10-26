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
}

const ActiveMatchContext = createContext<ActiveMatchContextType>({
  matchDeck: [],
  setMatchDeck: () => {},
  currentHand: [],
  setCurrentHand: () => {},
  maxHandSize: 6,
  selectedConstants: [],
  setSelectedConstants: () => {},
});

export default ActiveMatchContext;
