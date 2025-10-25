import "./CardSmall.css";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

function CardSmall() {
  const markdownSample = `
$\\{ a, \\dots \\}$
`;

  //TODO format cards
  return (
    <div className="cardSmall">
      <div className="cardSmallCorners">
        <p className="cardSmallCornerText">[College]</p>
        <p className="cardSmallCornerText">
          <u>[10]</u>
        </p>
      </div>

      <div className="cardSmallItem">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {markdownSample}
        </ReactMarkdown>
      </div>

      <div className="cardSmallCorners">
        <p className="cardSmallCornerText">
          <u>[10]</u>
        </p>
        <p className="cardSmallCornerText">[College]</p>
      </div>
    </div>
  );
}

export default CardSmall;
