import './Landing.css'
import './ActiveMatch.css'
import exitIcon from './assets/exit.png'
import { useState } from 'react'
import MatchInformationHeader from './ActiveMatchComponents/MatchInformationHeader'
import TurnInformation from './ActiveMatchComponents/TurnInformation'
import CurrentHandToPlay from './ActiveMatchComponents/CurrentHandToPlay'
import Landing from './Landing'

// TODO implement state management for active match data and navigation back to landing page

function ActiveMatch() {
    const [inMatch, setInMatch] = useState(true);
    const [isConfirmingExit, setIsConfirmingExit] = useState(false);

    const handleExit = () => {
        if (!isConfirmingExit) {
            window.alert("Are you sure you want to exit the match? Click exit again to confirm.");
            setIsConfirmingExit(true);
        } else {
            setInMatch(false);
        }
    };

    if (!inMatch) {
        return <Landing />;
    }

    return (
        <>
            <div className="absoluteHeader">
                <img src={exitIcon} alt="Exit Icon" className="exitIcon" onClick={handleExit} />
                <h1>Active Match</h1>
            </div>
            <MatchInformationHeader />
            <TurnInformation />
            <CurrentHandToPlay />
        </>
    )
}

export default ActiveMatch;