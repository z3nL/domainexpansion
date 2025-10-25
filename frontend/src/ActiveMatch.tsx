import "./Landing.css";
import "./ActiveMatch.css";
import exitIcon from "./assets/exit.png";
import { useState } from "react";
import MatchInformationHeader from "./ActiveMatchComponents/MatchInformationHeader";
import TurnInformation from "./ActiveMatchComponents/TurnInformation";
import CurrentHandToPlay from "./ActiveMatchComponents/CurrentHandToPlay";
import Landing from "./Landing";
import PlayCardModal from "./ActiveMatchComponents/PlayCardModal";
import GameContext from "./GameContext";
import { useContext } from "react";
import type { ICard } from "./game/cards";

// TODO implement state management for active match data and navigation back to landing page

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

function ActiveMatch() {
  const { deck } = useContext(GameContext);

  const maxHandSize: number = 6;
  const maxTurns: number = 10; // TODO: Change to 20 later

  const [currentTurn, setCurrentTurn] = useState(1); // Host is odd turn, guest is even
  const [currentHand, setCurrentHand] = useState<ICard[]>([]);
  const [hostScore, setHostScore] = useState(1);
  const [guestScore, setGuestScore] = useState(1);

  const [inMatch, setInMatch] = useState(true);
  const [isConfirmingExit, setIsConfirmingExit] = useState(false);
  const [isConfirmingExit_time, setIsConfirmingExit_time] = useState<
    number | null
  >(null);
  const [isPlayingCard, setIsPlayingCard] = useState(false);

  const handleExit = () => {
    if (!isConfirmingExit) {
      window.alert(
        "Are you sure you want to exit the match? Click exit again within 5 seconds to confirm.",
      );
      setIsConfirmingExit(true);
      setIsConfirmingExit_time(Date.now());
    } else if (
      isConfirmingExit_time &&
      Date.now() - isConfirmingExit_time < 5000
    ) {
      setInMatch(false);
      setIsConfirmingExit(false);
    } else {
      window.alert("Exit confirmation timed out, please confirm again.");
      setIsConfirmingExit(false);
    }
  };

  const handlePlayCardModal = () => {
    setIsPlayingCard(!isPlayingCard);
  };

  // When the match is over, return to the landing page
  if (!inMatch) {
    return <Landing />;
  }

  return (
    <>
      <div className="absoluteHeader">
        <img
          src={exitIcon}
          alt="Exit Icon"
          className="exitIcon"
          onClick={handleExit}
        />
        <h1>Active Match</h1>
      </div>
      <MatchInformationHeader
        {...{
          hostScore: hostScore,
          guestScore: guestScore,
          turnsRemaining: maxTurns - currentTurn,
          cardsRemaining: deck.length,
        }}
      />
      <TurnInformation />
      <CurrentHandToPlay handlePlayCardModal={handlePlayCardModal} />
      {isPlayingCard && (
        <PlayCardModal handlePlayCardModal={handlePlayCardModal} />
      )}
    </>
  );
}

export default ActiveMatch;
