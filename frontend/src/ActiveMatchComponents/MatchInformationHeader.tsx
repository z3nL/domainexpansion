function MatchInformationHeader() {
    // TODO state variables for player scores and turns left
    return (
        <div className="matchInfoHeader">
            <div className='matchInfoItem'>
                <h3>You</h3>
                <p>[17]</p>
            </div>
            <div className='matchInfoItem'>
                <h3>Opponent</h3>
                <p>[38]</p>
            </div>
            <div className='matchInfoItem'>
                <h3>Turns Left</h3>
                <p>[12]</p>
            </div>
        </div>
    );
}
export default MatchInformationHeader;