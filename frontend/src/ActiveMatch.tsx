import "./Landing.css";
import "./ActiveMatch.css";
import exitIcon from "./assets/exit.png";
import { useState } from "react";
import MatchInformationHeader from "./ActiveMatchComponents/MatchInformationHeader";
import TurnInformation from "./ActiveMatchComponents/TurnInformation";
import CurrentHandToPlay from "./ActiveMatchComponents/CurrentHandToPlay";
import Landing from "./Landing";
import PlayCardModal from "./ActiveMatchComponents/PlayCardModal";

// TODO implement state management for active match data and navigation back to landing page

function ActiveMatch() {
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
      <MatchInformationHeader />
      <TurnInformation />
      <CurrentHandToPlay handlePlayCardModal={handlePlayCardModal} />
      {isPlayingCard && (
        <PlayCardModal handlePlayCardModal={handlePlayCardModal} />
      )}
    </>
  );
}

export default ActiveMatch;
