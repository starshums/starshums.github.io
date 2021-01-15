import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  let location = useLocation()

  function renderNavigation() {
    if(location.pathname === "/") {
      return <Fragment>
        <li><span className="menu-text"><Link to="/about"><i className={"fas fa-user"}></i> ABOUT ME</Link></span></li>
        <li><span className="menu-text"><Link to="/projects"><i className={"fas fa-file-code"}></i> PROJECTS</Link></span></li>
        <li><span className="menu-text"><Link to="/contact"><i className={"fas fa-at"}></i> CONTACT</Link></span></li>
      </Fragment>
    } else {
      return <li><span className="menu-text"><Link to="/"><i className={"fas fa-hand-point-left"}></i> GO BACK</Link></span></li>;
    }
  }

  return (

    <div className="bottom">
      <div className="projects-wrapper">
        <ul className="home-menu">
          { renderNavigation() }
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
