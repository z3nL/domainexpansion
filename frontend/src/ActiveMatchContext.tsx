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
  hostScore: number | number[];
  setHostScore: (score: number | number[]) => void;
  guestScore: number | number[];
  setGuestScore: (score: number | number[]) => void;
  nextTurn: () => void;
}

const ActiveMatchContext = createContext<ActiveMatchContextType>({
  matchDeck: [],
  setMatchDeck: () => {},
  currentHand: [],
  setCurrentHand: () => {},
  maxHandSize: 6,
  selectedConstants: [],
  setSelectedConstants: () => {},
  hostScore: 0,
  setHostScore: () => {},
  guestScore: 0,
  setGuestScore: () => {},
  nextTurn: () => {},
});

export default ActiveMatchContext;
