import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./PlayCardModal.css";
import GameContext from "../GameContext";
import ActiveMatchContext from "../ActiveMatchContext";
import CardSmall from "./CardSmall";
import { useContext, useState } from "react";
import { evaluate_formula } from "../game/cards";
import { drawCard } from "../game/decks";
import type { IMatchPayload } from "../matchPayload";

// TODO implement actual onClick for playCardButton

function PlayCardModal() {
  const {
    handlePlayCardModal,
    cardBeingPlayed,
    sendGameMessage,
    playerNumber,
    setMatchStatus,
  } = useContext(GameContext);
  const {
    beginNextTurn,
    matchDeck,
    currentHand,
    setCurrentHand,
    selectedConstants,
    setSelectedConstants,
    playerOneScore,
    playerTwoScore,
    maxHandSize,
  } = useContext(ActiveMatchContext);
  const [targetValue, setTargetValue] = useState("Self");

  const handleConfirmPlay = () => {
    if (!cardBeingPlayed) {
      // This should never happen
      throw new Error("No card being played");
    }

    // Validate the played hand **we have a function for this**
    // if validation fails, show error message and do fucking nothing
    let result;
    try {
      result = evaluate_formula(
        cardBeingPlayed,
        targetValue === "Self" ? playerOneScore : playerTwoScore,
        selectedConstants,
      );
    } catch (error) {
      window.alert("Invalid play: please do math better");
      return;
    }

    let isGameOver = false;
    let winner = "player one";

    const targetPlayer =
      targetValue === "Self" ? playerNumber : playerNumber === 1 ? 2 : 1;

    let newPlayerOneScore = playerOneScore;
    let newPlayerTwoScore = playerTwoScore;

    if (targetPlayer === 1) {
      newPlayerOneScore = result;
    } else {
      newPlayerTwoScore = result;
    }

    // Remove cardBeingPlayed and selectedConstants from currentHand
    const newHand = currentHand.filter(
      (card) =>
        card.name !== cardBeingPlayed.name &&
        !selectedConstants.some((selCard) => selCard.name === card.name),
    );
    setCurrentHand(newHand);
    setSelectedConstants([]);

    // Draw new cards to refill hand up to maxHandSize
    for (let i = newHand.length; i < maxHandSize; i++) {
      newHand.push(drawCard(matchDeck));

      // Out of cards end match condition check
      if (matchDeck.length === 0) {
        window.alert("ngl you done bro");
        break;
      }
    }
    setCurrentHand(newHand);

    // Update game state to next turn
    const newTurnNumber = beginNextTurn();
    if (newTurnNumber === -1) {
      isGameOver = true;
    }
   
    if (!Number.isFinite(newPlayerOneScore) || !Number.isFinite(newPlayerTwoScore)) {
      isGameOver = true;
    }

    if (isGameOver) {
      console.log("Game over condition met");
      if (!Number.isFinite(newPlayerOneScore)) {
        console.log("win by infinite P1");
        winner = "player one";
      } else if (!Number.isFinite(newPlayerTwoScore)) {
        console.log("win by infinite P2");
        winner = "player two";
      } else if (newPlayerOneScore > newPlayerTwoScore) {
        console.log("win by score P1");
        winner = "player one";
      } else if (newPlayerTwoScore > newPlayerOneScore) {
        console.log("win by score P2");
        winner = "player two";
      } else {
        console.log("draw by score");
        winner = "Draw!";
      }
    }
    else{
      console.log("Game continues to next turn");
    }
    

    // SEND PACKET to server with updated info
    const payload: IMatchPayload = {
      type: "playerMove",
      playerOneScore: newPlayerOneScore,
      playerTwoScore: newPlayerTwoScore,
      currentTurn: newTurnNumber, // TODO: Implement current turn tracking
      isGameOver: isGameOver, // TODO: Implement game over condition
      winner: "player one", // TODO: Implement winner determination
    };
    sendGameMessage(payload);
    setMatchStatus(payload);

    // Close modal
    handlePlayCardModal?.(null);
  };

  return (
    <div className="playCardModal" onClick={() => handlePlayCardModal?.(null)}>
      <div
        className="playCardModalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Play Card</h2>
        <div className="card-content-wrapper">
          <div className="card-image-box">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {cardBeingPlayed?.symbol}
            </ReactMarkdown>
          </div>
        </div>
        <div
          className="targetSelector"
          role="radiogroup"
          aria-label="Play target"
        >
          <label className="targetOption">
            <input
              type="radio"
              name="playTarget"
              value="Self"
              checked={targetValue === "Self"}
              onChange={() => setTargetValue("Self")}
            />
            Self
          </label>
          <label className="targetOption">
            <input
              type="radio"
              name="playTarget"
              value="Opponent"
              checked={targetValue === "Opponent"}
              onChange={() => setTargetValue("Opponent")}
            />
            Opponent
          </label>
        </div>
        <div className="availableConstants">
          {currentHand
            .filter((card) => card.type === "Constant")
            .map((card) => (
              <CardSmall key={card.name} card={card} />
            ))}
        </div>
        <button className="playCardButton" onClick={handleConfirmPlay}>
          Let's Go!
        </button>
      </div>
    </div>
  );
}

export default PlayCardModal;
