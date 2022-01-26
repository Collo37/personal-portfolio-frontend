import Routing from "../../hooks/Routing";

import Button from "../UI components/Button/Button";

import "./showcasedProjectStyles.css";

const ShowcaseProject = ({ project, index }) => {
  const { visitPage } = Routing();

  return (
    <div
      className={`showcased-project ${
        project.technologies.includes("MongoDB") && "wide-column-span"
      }`}
      onClick={() => visitPage(`projects/${project.name}`)}
    >
      <img alt={project.name} src={project.image} />
      <div className="showcased-project-description">
        <h3>{project.name}</h3>
        <Button
          text="See Project"
          filled
          clicked={() => visitPage(`projects/${project.name}`)}
        />
      </div>
      <div
        className={`project-name ${index % 2 !== 0 && "project-name-flipped"}`}
      >
        <p className="project-name-text">{project.name}</p>
      </div>
    </div>
  );
};

export default ShowcaseProject;
