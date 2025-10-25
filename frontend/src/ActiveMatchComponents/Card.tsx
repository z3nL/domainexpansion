import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

interface CardProps {
  name?: string;
  type?: string;
  power?: string;
  symbol?: string;
  description?: string;
}
function Card({
  // place holder
  name = "sin(x)",
  type = "Formula",
  power = "90",
  symbol = "Function",
  description = "Trigonometric function",
}: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-name">{name}</h3>
        <span className="card-power">{power}</span>
      </div>

      <div className="card-type">{type}</div>

      <div className="card-content-wrapper">

        <div className="card-image-box">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {symbol}
          </ReactMarkdown>
        </div>

        <div className="card-description">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {description}
          </ReactMarkdown>
        </div>

        </div>
    </div>
  );
}

export default Card;
