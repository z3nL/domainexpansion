import './Landing.css'
import './ActiveMatch.css'
import MatchInformationHeader from './ActiveMatchComponents/MatchInformationHeader'
import TurnInformation from './ActiveMatchComponents/TurnInformation'
import CurrentHandToPlay from './ActiveMatchComponents/CurrentHandToPlay'

function ActiveMatch() {
    return (
        <>
            <h1>Active Match</h1>
            <MatchInformationHeader />
            <TurnInformation />
            <CurrentHandToPlay />
        </>
    )
}

export default ActiveMatch;