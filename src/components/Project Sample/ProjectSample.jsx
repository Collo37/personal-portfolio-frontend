import { useRef } from "react";
import gsap, { Power3 } from "gsap";

import Routing from "../../hooks/Routing";

import "./ProjectSampleStyles.css";

const ProjectSample = ({ project, index }) => {
  let curtain = useRef(null);
  let image = useRef(null);

  const { visitPage } = Routing();

  const tl = gsap.timeline({ defaults: { duration: 0.5, ease: Power3.ease } });

  const hideCurtain = () => {
    tl.to(curtain, {
      width: 0,
    });
    tl.to(
      image,
      {
        scale: 1,
        opacity: 1,
      },
      "<"
    );
  };

  const showCurtain = () => {
    tl.to(curtain, {
      width: "100%",
    });
    tl.to(
      image,
      {
        scale: 1.2,
        opacity: 0,
      },
      "<"
    );
  };

  return (
    <div
      className="project-sample"
      onMouseEnter={hideCurtain}
      onMouseLeave={showCurtain}
      onClick={() => visitPage(`projects/${project.name}`)}
    >
      <img
        ref={(el) => {
          image = el;
        }}
        className="project-image"
        alt={project.name}
        src={project.image}
      />
      <div
        className={`curtain ${
          index % 2 === 0 ? "right-curtain" : "left-curtain"
        }`}
        ref={(element) => {
          curtain = element;
        }}
      />
      <div className="shadow" />
      <div
        className="index"
        style={{
          right: index % 2 === 0 && "0",
          left: index % 2 !== 0 && "0",
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.5"
            y="1.5"
            width="197"
            height="197"
            stroke="#606259"
            strokeWidth="3"
          />
        </svg>
        <h3>{index}</h3>
      </div>
      <div
        className="project"
        style={{
          left: index % 2 === 0 && "0",
          right: index % 2 !== 0 && "0",
          textAlign: index % 2 === 0 ? "left" : "right",
        }}
      >
        <h2 className="project-title">{project.name}</h2>
        <p className="description">{project.remarks}</p>
      </div>
    </div>
  );
};

export default ProjectSample;
