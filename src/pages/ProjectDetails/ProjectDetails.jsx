import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { GitHub, LanguageOutlined } from "@mui/icons-material";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { request } from "../../components/axios";

import "./ProjectDetailsStyles.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
  const params = useParams();

  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  const getProjectAndSetAnimations = async () => {
    let projectDetails = await request.get(`/projects/${params.id}`);
    setProject(projectDetails.data.data);
    setLoading(false);

    gsap.to(".project-details-image-container-curtain", 1.2, {
      delay: 0.4,
      transform: "translateX(-115%)",
    });

    gsap.to(
      ".project-details-image",
      1.2,
      {
        delay: 0.4,
        transform: "scale(1)",
      },
      "<"
    );

    timeline.to("#project-details-project-name", {
      strokeDashoffset: 500,
    });

    timeline.to(".project-details-image-container", {
      x: 100,
      opacity: 0.5,
    });

    ScrollTrigger.create({
      animation: timeline,
      trigger: "#project-details-project-name, project-details-image-container",
      scrub: 1,
      start: `top ${window.innerHeight / 2.5}`,
    });
  };

  const timeline = gsap.timeline({ defaults: { duration: 1.5, delay: 0 } });

  useEffect(() => {
    getProjectAndSetAnimations();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="project-details-container">
      <section className="project-details-landing-section">
        <div className="project-details-image-container">
          <div className="project-details-image-container-curtain" />
          <img
            src={project.image}
            alt={project.name}
            className="project-details-image"
          />
        </div>
        <svg fill="none" stroke="none" id="project-details-svg">
          <text y="50%" textAnchor="right" id="project-details-project-name">
            {project.name}
          </text>
        </svg>
        <div className="project-details__project-links">
          <LanguageOutlined
            className="project-link"
            onClick={() => window.open(project.link)}
            title="Live Project"
          />
          <GitHub
            className="project-link"
            onClick={() => window.open(project.git)}
            title="GitHub"
          />
        </div>
      </section>
      <section className="project-details-description">
        <h2>Project Description</h2>
        <article>{project.remarks}</article>
      </section>
      <section className="project-details-summary">
        <h2>Project Summary</h2>
        <article>{project.summary}</article>
        <div className="project-details-tech-stack">
          {project?.technologies.map((technology, index) => {
            return technology !== "API" && <p key={index}>{technology}</p>;
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
