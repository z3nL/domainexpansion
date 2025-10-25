import './Landing.css'
import './ActiveMatch.css'
import exitIcon from './assets/exit.png'
import MatchInformationHeader from './ActiveMatchComponents/MatchInformationHeader'
import TurnInformation from './ActiveMatchComponents/TurnInformation'
import CurrentHandToPlay from './ActiveMatchComponents/CurrentHandToPlay'

function ActiveMatch() {
    return (
        <>
            <div className="absoluteHeader">
                <img src={exitIcon} alt="Exit Icon" className="exitIcon" />
                <h1>Active Match</h1>
            </div>
            <MatchInformationHeader />
            <TurnInformation />
            <CurrentHandToPlay />
        </>
    )
}

export default ActiveMatch;