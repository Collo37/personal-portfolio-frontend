import { useEffect } from "react";

import { twistAnimation } from "../../animations/animations";

import "./CodeSnippetStyles.css";

const CodeSnippet = ({ lines, id }) => {
  useEffect(() => {
    twistAnimation(id, 40, 1, 0.05);
  }, []);

  return (
    <div className="code-images-container">
      {lines.map((line, index) => {
        return (
          <svg
            key={index}
            className="code-image"
            id={id}
            style={{ marginLeft: line[0] === " " ? 10 : 0 }}
          >
            <text
              fill={line[0] !== " " ? "#fc7a1e" : "white"}
              stroke={line[0] !== " " ? "#fc7a1e" : "white"}
              y="50%"
            >
              {line}
            </text>
          </svg>
        );
      })}
    </div>
  );
};

export default CodeSnippet;
