import { motion } from "framer-motion";
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

  const showHeader = () => {
    // return location.pathname === "/" ? 
    return <div class="top">
      <p>Hello there <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="60px" />,  I'm Shums!</p> 
      <p class="secondary-info">
        I'm a Software Developer, Indie Game Developer.</p> </div>
      {/* </p> </div> : <p style={{color: "white"}}> { location.pathname } </p> ; */}
  }

  return (
    <Fragment>
      { showHeader() }
      <div className="bottom">
        <div className="projects-wrapper">
          <ul className="home-menu">
            { renderNavigation() }
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
