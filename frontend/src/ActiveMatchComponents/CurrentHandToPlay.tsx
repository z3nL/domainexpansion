import MatchCardWrapper from "./MatchCardWrapper";
import type { ICard } from "../game/cards";


function CurrentHandToPlay({
  handlePlayCardModal,
  currentHand
}: {
  handlePlayCardModal: () => void;
  currentHand: ICard[];
}) {
  //TODO state variable for currently selected card
  return (
    <>
      <div className="currentHandToPlay">
        <div className="hand">
            {currentHand.map((card: ICard, index: number) => (
              <MatchCardWrapper key={index} card={card} handlePlayCardModal={handlePlayCardModal} />
            ))}
          </div>
        <div className="selectedCardInfo">
        </div>
      </div>
    </>
  );
}

export default CurrentHandToPlay;
