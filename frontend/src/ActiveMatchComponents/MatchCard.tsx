import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import type { ICard } from "../game/cards";
import { powerLookupTable } from "../game/cards";
import "./Card.css";
import GameContext from "../GameContext";
import { useContext } from "react";

function MatchCard({ card }: { card: ICard }) {
  const { handlePlayCardModal } = useContext(GameContext);

  return (
    <div className={`card_nonSelectable`}>
      <div className="card-header">
        <h3 className="card-name">{card.name}</h3>
        <span className="card-power">{powerLookupTable(card.tier)}</span>
      </div>

      <div className="card-type">{card.type}</div>

      <div className="card-content-wrapper">
        <div className="card-image-box">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {card.symbol}
          </ReactMarkdown>
        </div>

        <div className="card-description">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {card.description}
          </ReactMarkdown>
        </div>
      </div>
      {card.type !== "Constant" && (
        <button
          className="playCardButton"
          onClick={() => handlePlayCardModal?.(card)}
        >
          Play Card
        </button>
      )}
    </div>
  );
}

export default MatchCard;
