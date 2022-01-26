import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Routing from "../../hooks/Routing";

import Button from "../../components/UI components/Button/Button";

import { myImages } from "../../config/personalDetails";

import "./AboutStyles.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { visitPage } = Routing();

  useEffect(() => {
    gsap.to("#about-page-svg-text", 2, {
      delay: 0.7,
      strokeDashoffset: 0,
    });

    gsap.to(".about-page-landing-section-curtain", 1.5, {
      delay: 1.5,
      width: 0,
      ease: "Power3.easeOut",
    });
  }, []);
  return (
    <div className="about-page-container">
      <div className="about-page-landing-section">
        <svg id="about-page-svg-title">
          <text
            id="about-page-svg-text"
            y="50%"
            x="50%"
            textAnchor="middle"
            fill="transparent"
            stroke="white"
            strokeWidth="2px"
          >
            About Me
          </text>
        </svg>
        <div className="about-page-landing-section-top"></div>
        <div className="about-page-landing-section-bottom">
          <div className="about-page-landing-section-curtain" />
          <div className="my-images">
            {myImages.map((image, index) => {
              return (
                <img
                  alt="Collins"
                  src={image}
                  key={index}
                  className="about-page-landing-section-image"
                />
              );
            })}
          </div>
        </div>
      </div>
      <section className="about-me-details">
        <article className="about-me-intro">
          My name is <span>Collins Oduor</span>. I am a full stack web
          developer. I code in <span>JavaScript</span> and <span>Python</span>.
          My go-to tech stack is <span>React js</span> for the front end and{" "}
          <span>Node js</span> for the back end.
        </article>
        <article className="about-me-education">
          I am mostly self-taught with <span>2+ Years</span> of programming
          experience. I started out as a python developer and only started
          coding in javaScript a year ago.
        </article>
        <article className="about-me-experience">
          During my period as a programmer I have worked on numerous projects in
          different programming language like C, C++ and Visual Basic. It is
          through these experiences that I acquired what seems to be my greatest
          skill. The ability to understand whatever concept that's thrown my
          way. Like my own little <span>super power</span>.
        </article>
        <article className="about-me-skills">
          Throughout my journey I have acquired a set of skills and techniques
          for completing tasks and <span>problem-solving</span>.
        </article>
        <article className="about-me-hobbies">
          I don't just code all the time though. I like to kick back and relax
          as I watch some <span>anime</span>, go for a <span>run</span> or maybe
          even <span>draw</span>.
        </article>
        <article className="about-me-outro">
          There is still so much I could say about myself but enough of that.
          Tell me about you.
          <Button
            text="Let's talk"
            filled
            clicked={() => visitPage("contact")}
          />
        </article>
      </section>
    </div>
  );
};

export default About;
