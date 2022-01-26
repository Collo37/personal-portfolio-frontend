import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../../components/UI components/Button/Button";
import ShowcasedProject from "../../components/ShowcasedProject/ShowcasedProject";

import { request } from "../../components/axios";

import { screenshots } from "../../config/images";
import { techStack } from "../../config/personalDetails";

import "./ProjectStyles.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [unfilteredProjects, setUnfilteredProjects] = useState([]);

  const filter = (param) => {
    if (param !== "All") {
      let filteredProjects = unfilteredProjects.filter((project) => {
        return project.technologies.includes(param);
      });
      setProjects(filteredProjects);
    } else {
      setProjects(unfilteredProjects);
    }
  };

  useEffect(() => {
    const getAllProjects = async () => {
      const allProjects = await request.get("/projects");
      setProjects(allProjects.data.data);
      setUnfilteredProjects(allProjects.data.data);
    };
    getAllProjects();

    gsap.to(".projects-page-svg-title", 1.5, {
      delay: 1,
      strokeDashoffset: 0,
    });
    gsap.to(".project-landing-section-left", 1.5, {
      width: "100%",
      scrollTrigger: {
        trigger: ".project-landing-section-left",
        scrub: 1,
        start: "top 70px",
      },
    });
  }, []);

  return (
    <div className="projects-container">
      <div className="projects-landing-section">
        <div className="project-landing-section-left">
          <svg className="projects-page-title">
            <text
              className="projects-page-svg-title"
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="transparent"
              stroke="white"
              strokeWidth="3px"
            >
              Projects
            </text>
          </svg>
        </div>
        <div className="project-landing-section-right">
          {screenshots.map((image, index) => {
            return (
              <div
                className="landing-section-grid-image"
                key={index}
                style={{ backgroundImage: `url(${image})` }}
              />
            );
          })}
        </div>
      </div>
      <div className="all-projects-container">
        <div className="projects-filter">
          {techStack.map((stack, index) => {
            return (
              <Button
                text={stack}
                filled
                clicked={() => filter(stack)}
                key={index}
              />
            );
          })}
        </div>
        <div className="projects-showcase">
          {projects.map((project, index) => {
            return (
              <ShowcasedProject project={project} index={index} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
