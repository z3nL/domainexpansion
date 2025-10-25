import "./Landing.css"
import "./EditDeck.css"
import Card from "./ActiveMatchComponents/Card"
import exitIcon from './assets/exit.png'
// Edit Deck Funtions
function EditDeck() {
    // Have to mkae it so it only selects one option
    return (
        <>
        
        <div className="absoluteHeader">
                <img src={exitIcon} alt="Exit Icon" className="exitIcon" />
            <h2>Edit Deck</h2>
        </div>
        <div className="menu-overlay"> 
        </div>
        <div className="menu-overlay2"> 
        </div>
        <div className="edit-deck">
            <div className="deck-type-options">
                <label className="radio-label">
                    <input type="radio" value="Constants" name="target"/>
                    Constants
                </label>
                <label className="radio-label">
                    <input type="radio" value="Formulas" name="target"/>
                    Formulas
                </label>
                <label className="radio-label">
                    <input type="radio" value="Concepts" name="target"/>
                    Concepts
                </label>
            </div>
            <div className="select-container">
                <label className="select-p">
                    Selected/NumberofCards
                </label>
                <label className="select-p">
                    Selected/NumberofCards
                </label>
                <label className="select-p">
                    Selected/NumberofCards
                </label>
            </div>
            <div className="cards-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

        </>
    )
}
export default EditDeck