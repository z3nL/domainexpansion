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
      <div className="menu-overlay">
        <div className="menu-overlay2">
          <div className="edit-deck">
            <div className="deck-type-options">
              <label className="radio-label">
                <input type="radio" value="Constants" name="target" />
                Constants
              </label>
              <label className="radio-label">
                <input type="radio" value="Formulas" name="target" />
                Formulas
              </label>
              <label className="radio-label">
                <input type="radio" value="Concepts" name="target" />
                Concepts
              </label>
            </div>
            <div className="select-container">
              <label className="select-p">Selected/NumberofCards</label>
              <label className="select-p">Selected/NumberofCards</label>
              <label className="select-p">Selected/NumberofCards</label>
            </div>
            <div className="cards-container">
              <Card
                name="sin(x)"
                type="Formula"
                power="90"
                symbol="sin(x) = opposite/hypotenuse"
                description="Sine function for right triangles"
              />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditDeck;
