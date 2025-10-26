import "./CardSmall.css";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import type { ICard } from "../game/cards";
import { powerLookupTable } from "../game/cards";
import ActiveMatchContext from "../ActiveMatchContext";
import GameContext from "../GameContext";
import { useContext, useState } from "react";

function CardSmall({ card }: {card: ICard}) {
  const { selectedConstants, setSelectedConstants } = useContext(ActiveMatchContext);
  const { isPlayingCard } = useContext(GameContext);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectCard = () => {
    if (isSelected) {
      setSelectedConstants(
        selectedConstants.filter((c: { name: string }) => c.name !== card.name)
      );
    } else {
      setSelectedConstants([...selectedConstants, card]);
    }
    setIsSelected(!isSelected);
  };

  //TODO format cards
  return (
    <div className={`cardSmall_${isPlayingCard ? "IsPlayingCard" : ""}${isSelected ? "_IsSelected" : ""}`} onClick={handleSelectCard}>
      <div className="cardSmallCorners">
        <p className="cardSmallCornerText">{card?.tier}</p>
        <p className="cardSmallCornerText">
          <u>{powerLookupTable(card?.tier)}</u>
        </p>
      </div>

      <div className="cardSmallItem">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {card?.symbol}
        </ReactMarkdown>
      </div>

      <div className="cardSmallCorners">
        <p className="cardSmallCornerText">
          <u>{powerLookupTable(card?.tier)}</u>
        </p>
        <p className="cardSmallCornerText">{card?.tier}</p>
      </div>
    </div>
  );
}

export default CardSmall;
