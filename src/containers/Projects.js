import { Fragment } from "react";
import { Link } from "react-router-dom";

import data from "../projects.json";
import Project from "../components/Project";

const Projects = ({ sectionTitle, icon, type }) => {
  let projects = data.filter((filteredProjects) => filteredProjects.type === type);
  let projectIcon = "";
  if (type === "project") projectIcon = "folder-open";
  else projectIcon = "gamepad";

  return (
    <div className="bottom">
      <h2 className="projects-section-title">
        <i className={"fas fa-" + icon}></i> {sectionTitle}
      </h2>
      <div className="projects-wrapper">
        <ul className="projects">
          {projects.map((project, index) => ( <Project key={index} project={project} projectIcon={projectIcon} /> ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
