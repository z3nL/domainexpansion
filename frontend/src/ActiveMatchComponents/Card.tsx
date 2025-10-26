import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import type { ICard } from "../game/cards";
import { powerLookupTable } from "../game/cards";
import "./Card.css";
import { useState, useContext } from "react";
import GameContext from "../GameContext";

import {
  countConstantCards,
  countFormulaCards,
  countConceptCards,
} from "../EditDeckCardCounters";
const MAX_CONSTANT_CARDS = 10;
const MAX_FORMULA_CARDS = 5;
const MAX_CONCEPT_CARDS = 1;

function Card(card: ICard) {
  const { deck, setDeck } = useContext(GameContext);
  const checkIfInDeck = () => {
    const found = deck.find((c: { name: string }) => c.name === card.name);
    return found !== undefined;
  };
  const [isSelected, setIsSelected] = useState(checkIfInDeck());

  const handleCardClick = () => {
    if (isSelected) {
      setDeck(deck.filter((c: { name: string }) => c.name !== card.name));
      setIsSelected(!isSelected);
    } else if (
      (countConstantCards(deck) < MAX_CONSTANT_CARDS &&
        card.type === "Constant") ||
      (countFormulaCards(deck) < MAX_FORMULA_CARDS &&
        card.type === "Formula") ||
      (countConceptCards(deck) < MAX_CONCEPT_CARDS && card.type === "Concept")
    ) {
      setDeck([...deck, card]);
      setIsSelected(!isSelected);
    } else {
      window.alert(`Cannot add more ${card.type} cards to deck!`);
    }
  };

  return (
    <div
      className={`card_${isSelected ? "Selected" : "Unselected"}`}
      onClick={handleCardClick}
    >
      <div className="card-header">
        <h3 className="card-name">{card.name}</h3>
        <span className="card-power">{powerLookupTable(card.tier)}</span>
      </div>

      <div className="card-type">{card.type}</div>

      <div className="card-content-wrapper">
        <div className="card-image-box">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {card.symbol}
          </ReactMarkdown>
        </div>

        <div className="card-description">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {card.description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Card;
