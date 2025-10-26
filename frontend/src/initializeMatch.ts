import type { ICard } from "./game/cards";
import { drawCard } from "./game/decks";

const initializeMatch = (
  deck: ICard[],
  setMatchDeck: (deck: ICard[]) => void,
  setCurrentHand: (hand: ICard[]) => void,
  maxHandSize: number,
) => {
  const deckSize = deck.length;
  const deckClone = [...deck];

  const shuffledDeck: ICard[] = [];
  for (let i = 0; i < deckSize; i++) {
    shuffledDeck.push(drawCard(deckClone));

    if (deckClone.length === 0) {
      break;
    }
  }

  // Deal the first maxHandSize cards to the hand
  const currentHand = shuffledDeck.splice(0, maxHandSize);

  // The remaining cards become the match deck
  const matchDeck = shuffledDeck;

  // Update state
  setMatchDeck(matchDeck);
  setCurrentHand(currentHand);
};

export default initializeMatch;
