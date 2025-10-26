import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./PlayCardModal.css";
import "./Card.css";
import GameContext from "../GameContext";
import { useContext } from "react";

// TODO implement actual onClick for playCardButton

function PlayCardModal() {
  const { handlePlayCardModal, cardBeingPlayed } = useContext(GameContext);

  return (
    <div className="playCardModal" onClick={() => handlePlayCardModal?.(null)}>
      <div
        className="playCardModalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Play Card</h2>
        <div className="card-content-wrapper">
          <div className="card-image-box">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {cardBeingPlayed?.symbol}
            </ReactMarkdown>
          </div>
        </div>
        <button className="playCardButton" onClick={() => handlePlayCardModal?.(null)}>
          Let's Go!
        </button>
      </div>
    </div>
  );
}

export default PlayCardModal;
