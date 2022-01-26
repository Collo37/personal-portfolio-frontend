import { useRef, useEffect } from "react";

import Routing from "../../hooks/Routing";

import CodeSnippet from "../CodeSnippet/CodeSnippet";
import Button from "../UI components/Button/Button";

import { homePageLinesOfCode } from "../../config/codeLines";
import { fillSvg, slowReveal } from "../../animations/animations";

import "./LandingSection.css";

const LandingSection = () => {
  let title = useRef(null);
  let subTitleContainer = useRef(null);
  let tagLine = useRef(null);

  const { visitPage } = Routing();

  useEffect(() => {
    slowReveal([title, subTitleContainer, tagLine], 0.5, 1.5);
    fillSvg("#home-subtitle-role", "white", 2);
  }, [title, subTitleContainer, tagLine]);

  return (
    <div className="landing-section">
      <div className="landing-section-left">
        <CodeSnippet id="landing-snippet" lines={homePageLinesOfCode} />
      </div>
      <div className="landing-section-right">
        <div className="home-title floating-item">
          <h3
            ref={(el) => {
              title = el;
            }}
          >
            Hi,
          </h3>
          <div
            className="name"
            ref={(el) => {
              subTitleContainer = el;
            }}
          >
            <p>I'm</p>
            <svg id="home-title-name" fill="none">
              <text
                fill="#fc7a1e"
                stroke="#fc7a1e"
                y="100%"
                textAnchor="right"
                className="home-title-text"
              >
                Collins.
              </text>
            </svg>
          </div>
        </div>
        <div
          className="home-subtitle floating-item"
          ref={(el) => (tagLine = el)}
        >
          <svg>
            <text
              y="50%"
              fill="transparent"
              stroke="white"
              id="home-subtitle-role"
              width="100%"
            >
              A web Developer
            </text>
          </svg>
          {/* <img alt="code" className="clip-container" src={Code} /> */}
        </div>
        <Button filled text="Let's talk" clicked={() => visitPage("contact")} />
      </div>
    </div>
  );
};

export default LandingSection;
