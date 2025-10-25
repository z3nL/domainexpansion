import Card from "./CardSmall";

function CurrentHandToPlay({
  handlePlayCardModal,
}: {
  handlePlayCardModal: () => void;
}) {
  //TODO state variable for currently selected card
  return (
    <>
      <div className="currentHandToPlay">
        <div className="hand">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="selectedCardInfo">
          <p>
            [Modifies value of {"<your || opponent>"}'s score to become
            sin(score)]
          </p>
        </div>
        <button className="playCardButton" onClick={handlePlayCardModal}>
          Play Card
        </button>
      </div>
    </>
  );
}

export default CurrentHandToPlay;
