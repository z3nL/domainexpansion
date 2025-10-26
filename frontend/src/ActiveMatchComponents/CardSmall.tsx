import "./CardSmall.css";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import type { ICard } from "../game/cards";
import { powerLookupTable } from "../game/cards";

function CardSmall({ card }: {card: ICard}) {

  //TODO format cards
  return (
    <div className="cardSmall">
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
