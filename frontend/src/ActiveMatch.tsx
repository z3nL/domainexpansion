import "./Landing.css";
import "./ActiveMatch.css";
import exitIcon from "./assets/exit.png";
import { useEffect, useState } from "react";
import MatchInformationHeader from "./ActiveMatchComponents/MatchInformationHeader";
import TurnInformation from "./ActiveMatchComponents/TurnInformation";
import CurrentHandToPlay from "./ActiveMatchComponents/CurrentHandToPlay";
import PlayCardModal from "./ActiveMatchComponents/PlayCardModal";
import GameContext from "./GameContext";
import ActiveMatchContext from "./ActiveMatchContext";
import { useContext } from "react";
import type { ICard } from "./game/cards";
import handleExit from "./handleExit";
import initializeMatch from "./initializeMatch";

// TODO implement state management for active match data and navigation back to landing page

function ActiveMatch() {
  const { deck, setCurrentPage, isPlayingCard } = useContext(GameContext);

  const maxHandSize: number = 6;
  const maxTurns: number = 10; // TODO: Change to 20 later
  const nextTurn = () => {
    if (currentTurn < maxTurns) {
      setCurrentTurn(currentTurn + 1);
    } else {
      // End match
      window.alert("Match over LOL");
      setInMatch(false);
    }
  };

  const [beginningOfMatch, setBeginningOfMatch] = useState(true);
  const [currentTurn, setCurrentTurn] = useState(1); // Host is odd turn, guest is even
  const [matchDeck, setMatchDeck] = useState<ICard[]>([]);
  const [currentHand, setCurrentHand] = useState<ICard[]>([]);
  const [selectedConstants, setSelectedConstants] = useState<ICard[]>([]);
  const [hostScore, setHostScore] = useState<number>(1);
  const [guestScore, setGuestScore] = useState<number>(1);

  const [inMatch, setInMatch] = useState(true);
  const [isConfirmingExit, setIsConfirmingExit] = useState(false);
  const [isConfirmingExit_time, setIsConfirmingExit_time] = useState<
    number | null
  >(null);

  const handleExitWrapper = () => {
    handleExit({
      isConfirmingExit,
      setIsConfirmingExit,
      isConfirmingExit_time,
      setIsConfirmingExit_time,
      setInMatch,
    });
  };

  useEffect(() => {
    if (beginningOfMatch) {
      initializeMatch(deck, setMatchDeck, setCurrentHand, maxHandSize);
      setBeginningOfMatch(false);
    }
  }, [deck, maxHandSize, beginningOfMatch]);

  // When the match is over, return to the landing page
  useEffect(() => {
    if (!inMatch) {
      setCurrentPage("landing");
    }
  }, [inMatch, setCurrentPage]);

  return (
    <ActiveMatchContext.Provider
      value={{
        matchDeck,
        setMatchDeck,
        currentHand,
        setCurrentHand,
        maxHandSize,
        selectedConstants,
        setSelectedConstants,
        hostScore,
        setHostScore,
        guestScore,
        setGuestScore,
        nextTurn,
      }}
    >
      <div className="absoluteHeader">
        <img
          src={exitIcon}
          alt="Exit Icon"
          className="exitIcon"
          onClick={handleExitWrapper}
        />
        <h1>Active Match</h1>
      </div>
      <MatchInformationHeader
        {...{
          hostScore: hostScore,
          guestScore: guestScore,
          turnsRemaining: maxTurns - currentTurn,
          cardsRemaining: matchDeck.length,
        }}
      />
      <TurnInformation />
      <CurrentHandToPlay currentHand={currentHand} />
      {isPlayingCard && <PlayCardModal />}
    </ActiveMatchContext.Provider>
  );
}

export default ActiveMatch;
