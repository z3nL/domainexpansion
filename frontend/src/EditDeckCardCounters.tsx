import GameContext from "./GameContext";
import { useContext } from "react";
import type { ICard } from "./game/cards";

/**
 * Checks if the given card is a valid ICard object
 * @param {any} card The card to check
 * @returns {boolean} True if the card is a valid ICard object, false otherwise
 */
function isICard(card: any): card is ICard {
  return (
    typeof card === "object" &&
    card !== null &&
    "name" in card &&
    "description" in card &&
    "tier" in card &&
    "type" in card &&
    "symbol" in card
  );
}

/**
 * Validates if the given deck is a valid array of ICard objects
 * @param {any} deck The deck to validate
 * @returns {ICard[]} The validated deck
 * @throws {Error} If the deck is not an array or contains non-ICard objects
 */
function validateDeck(deck: any): ICard[] {
  // Check if deck is an array
  if (!Array.isArray(deck)) {
    throw new Error("Deck is not an array, got " + typeof deck);
  }

  // Check if all contents are ICard objects
  if (!deck.every((card) => isICard(card))) {
    throw new Error("Deck contains non-ICard objects");
  }

  return deck;
}

/**
 * Returns the number of constant cards in the given deck
 * @param {ICard[]} deck The deck to count constant cards from
 * @returns {number} The number of constant cards in the deck
 */
function countConstantCards(deck: ICard[]) {
  validateDeck(deck);
  const constantCards = deck.filter((card) => card.type === "Constant");
  return constantCards.length;
}

/**
 * Returns the number of formula cards in the given deck
 * @param {ICard[]} deck The deck to count formula cards from
 * @returns {number} The number of formula cards in the deck
 */
function countFormulaCards(deck: ICard[]) {
  validateDeck(deck);
  const formulaCards = deck.filter((card) => card.type === "Formula");
  return formulaCards.length;
}

/**
 * Returns the number of concept cards in the given deck
 * @param {ICard[]} deck The deck to count concept cards from
 * @returns {number} The number of concept cards in the deck
 */
function countConceptCards(deck: ICard[]) {
  validateDeck(deck);
  const conceptCards = deck.filter((card) => card.type === "Concept");
  return conceptCards.length;
}

function CardCounters() {
  const { deck } = useContext(GameContext);
  return (
    <div>
      <div>Constants: {countConstantCards(deck)}</div>
      <div>Formulas: {countFormulaCards(deck)}</div>
      <div>Concepts: {countConceptCards(deck)}</div>
    </div>
  );
}
export default CardCounters;
