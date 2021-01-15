import React, { Fragment } from "react";

export function Project({ project, projectIcon }) {
  
    return (
      <Fragment>
          <li className="project-item">
            <h3> <i className={"fas fa-" + projectIcon }></i> { project.title } </h3>
            <div className="project-desc" dangerouslySetInnerHTML={{ __html: project.description }} />
            <ul className="project-techs">
                {project.techs.map((tech, index) => { return <li key={index}> { tech } </li>; })}
            </ul>
            <div className="project-btns">
                { project.btns.map((btn, index) => {

                  let icon = "";
                  if(btn.id === "code") icon = "fab fa-github";
                  else icon = "fas fa-external-link-alt";

                  if(btn.id === "android") return <div className="google-play-btn" dangerouslySetInnerHTML={{ __html: btn.html }} />

                  return <Fragment key={index}>
                    <a className={btn.id} href={btn.url} target="_blank">
                    <i className={icon}></i> { btn.text }
                  </a>
                  </Fragment>
                })}
            </div>
          </li>
      </Fragment>
    );
}

export default Project;