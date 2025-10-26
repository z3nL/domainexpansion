import "./Landing.css";
import "./EditDeck.css";
import Card from "./ActiveMatchComponents/Card";
import exitIcon from "./assets/exit.png";
import editDeckHeader from "./assets/editDeck.png";
import { useState } from "react";
import type { ICard } from "./game/cards";

import { constantsDeck, formulasDeck, conceptsDeck } from "./game/decks";

// State variable for changing which deck is selected and displayed

import { useContext } from "react";
import GameContext from "./GameContext";
import CardCounters from "./EditDeckCardCounters";

function EditDeck() {
  const [selectedType, setSelectedType] = useState<ICard[]>(constantsDeck);
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
        <img src={editDeckHeader} alt="Edit Deck Header" className="editDeckHeader" />
      </div>
      <div className="edit-deck">
        <div className="deck-type-options">
          <select
            id="deck-type-select"
            className="deck-select"
            defaultValue="Constants"
            onChange={(e) => {
              const v = (e.target as HTMLSelectElement).value;
              if (v === "Constants") setSelectedType(constantsDeck);
              else if (v === "Formulas") setSelectedType(formulasDeck);
              else if (v === "Concepts") setSelectedType(conceptsDeck);
            }}
          >
            <option value="Constants">Constants</option>
            <option value="Formulas">Formulas</option>
            <option value="Concepts">Concepts</option>
          </select>
          <div className="select-container">
            <CardCounters />
          </div>
        </div>
        <div className="cards-container">
          {selectedType.length === 0 ? (
            <div className="empty-deck">No cards in this deck.</div>
          ) : (
            selectedType.map((card, i) => (
              <Card key={`${card.name ?? "card"}-${i}`} {...card} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default EditDeck;
