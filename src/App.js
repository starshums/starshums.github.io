import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './containers/Projects';
import About from "./components/About";
import Navigation from "./components/Navigation";
import CanvasApp from "./components/CanvasApp";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <CanvasApp />
      <AnimatePresence exitBeforeEnter>
        <Router>
          <Navigation />
          <Route
            path='/projects'
            render={(props) => <Projects {...props}
              sectionTitle={"Games"}
              icon={"gamepad"}
              type={"game"} />}
          />
          <Route
            path='/projects'
            render={(props) => <Projects {...props}
              sectionTitle={"Personal Projects"}
              icon={"file-alt"}
              type={"project"} />}
          />
          <Route
            path='/projects'
            render={(props) => <Projects {...props}
              sectionTitle={"3D Modeling & Animation"}
              icon={"cube"}
              type={"3D"} />}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Router>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;