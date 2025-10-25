import "./Landing.css";
import "./EditDeck.css";
import Card from "./ActiveMatchComponents/Card";
import exitIcon from "./assets/exit.png";

import { namedConstantsDeck, numericConstantDeck } from "./game/constants";
import { advancedFormulaDeck, elementaryFormulaDeck } from "./game/formulas";
import { conceptDeck } from "./game/concepts";
import { useState } from "react";
import type { ICard } from "./game/cards";

const constantsDeck = [...namedConstantsDeck, ...numericConstantDeck];
const formulasDeck = [...elementaryFormulaDeck, ...advancedFormulaDeck];
const conceptsDeck = [...conceptDeck];

// State variable for changing which deck is selected and displayed

import { useContext } from "react";
import GameContext from "./GameContext";
import CardCounters from "./EditDeckCardCounters";

function EditDeck() {
  const [selectedDeck, setSelectedDeck] = useState<ICard[]>(constantsDeck);
  const { setCurrentPage } = useContext(GameContext);
  // Have to mkae it so it only selects one option
  return (
    <>
      <div className="absoluteHeader">
        <img
          src={exitIcon}
          alt="Exit Icon"
          className="exitIcon"
          onClick={() => setCurrentPage("landing")}
        />
        <h2>Edit Deck</h2>
      </div>
          <div className="edit-deck">
            <div className="deck-type-options">
              <select id="deck-type-select"
                className="deck-select"
                defaultValue="Constants"
                onChange={(e) => {
                  const v = (e.target as HTMLSelectElement).value;
                  if (v === "Constants") setSelectedDeck(constantsDeck);
                  else if (v === "Formulas") setSelectedDeck(formulasDeck);
                  else if (v === "Concepts") setSelectedDeck(conceptsDeck);
                }}
              >
                <option value="Constants">Constants</option>
                <option value="Formulas">Formulas</option>
                <option value="Concepts">Concepts</option>
              </select>
              <div className="select-container">
                <CardCounters/>
              </div>
            </div>
            <div className="cards-container">
              {selectedDeck.length === 0 ? (
              <div className="empty-deck">No cards in this deck.</div>
              ) : (
              selectedDeck.map((card, i) => (
                <Card key={`${(card as any).name ?? "card"}-${i}`} {...card} />
              ))
              )}
            </div>
          </div>
    </>
  );
}
export default EditDeck;
