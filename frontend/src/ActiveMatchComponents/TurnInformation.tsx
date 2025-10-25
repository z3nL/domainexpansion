function TurnInformation() {
    // TODO state variables for turn information and selected action
    return (
        <div className="turnInformation">
            <h2>[Your Move...]</h2>
            <div className="turnActions">
                <label className="turnOption">
                    <input type="radio" name="target" value="self" />
                    Self
                </label>
                <label className="turnOption">
                    <input type="radio" name="target" value="opponent" />
                    Opponent
                </label>
            </div>
        </div>
    );
}

export default TurnInformation;
