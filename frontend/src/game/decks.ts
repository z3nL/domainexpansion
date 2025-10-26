import { namedConstantsDeck, numericConstantDeck } from "./constants";
import {
  advancedFormulaDeck,
  elementaryFormulaDeck,
  statsFormulaDeck,
  trigFormulaDeck,
} from "./formulas";
import { conceptDeck } from "./concepts";

import type { ICard } from "./cards";

const constantsDeck: ICard[] = [...namedConstantsDeck, ...numericConstantDeck];
const formulasDeck: ICard[] = [
  ...elementaryFormulaDeck,
  ...advancedFormulaDeck,
  ...statsFormulaDeck,
  ...trigFormulaDeck,
];
const conceptsDeck: ICard[] = [...conceptDeck];

const MAX_CONSTANT_CARDS: number = 10;
const MAX_FORMULA_CARDS: number = 10;
const MAX_CONCEPT_CARDS: number = 5;

/**
 * Draws a single card from the given deck.
 * The card is removed from the deck after drawing.
 * @param {ICard[]} deck The deck to draw from.
 * @returns {ICard} The drawn card.
 */
function drawCard(deck: ICard[]): ICard {
  const index = Math.floor(Math.random() * deck.length);
  return deck.splice(index, 1)[0];
}

/**
 * Returns a deck of cards containing a random selection of:
 * - MAX_CONSTANT_CARDS constant cards
 * - MAX_FORMULA_CARDS formula cards
 * - MAX_CONCEPT_CARDS concept cards
 *
 * If any of the decks run out of cards, the function will stop drawing from that deck.
 *
 * @returns {ICard[]} A deck of cards
 */
function randomDeck(): ICard[] {
  const deck: ICard[] = [];
  const conceptCopy = [...conceptsDeck];
  const formulaCopy = [...formulasDeck];
  const constantCopy = [...constantsDeck];

  // Draw constants
  for (let i = 0; i < MAX_CONSTANT_CARDS; i++) {
    deck.push(drawCard(constantCopy));

    if (constantCopy.length === 0) {
      break;
    }
  }

  // Draw formulas
  for (let i = 0; i < MAX_FORMULA_CARDS; i++) {
    deck.push(drawCard(formulaCopy));

    if (formulaCopy.length === 0) {
      break;
    }
  }

  // Draw concepts
  for (let i = 0; i < MAX_CONCEPT_CARDS; i++) {
    deck.push(drawCard(conceptCopy));

    if (conceptCopy.length === 0) {
      break;
    }
  }

  return deck;
}

export {
  constantsDeck,
  formulasDeck,
  conceptsDeck,
  MAX_CONSTANT_CARDS,
  MAX_FORMULA_CARDS,
  MAX_CONCEPT_CARDS,
  randomDeck,
  drawCard,
};
