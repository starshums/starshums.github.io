import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './containers/Projects';
import About from "./components/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Navigation />
          <Route
            path='/projects'
            render={(props) => <Projects {...props} sectionTitle={"3D Modeling & Animation"} icon={"cube"} type={"3D"} />}
          />
          <Route
            path='/projects'
            render={(props) => <Projects {...props} sectionTitle={"Games"} icon={"gamepad"} type={"game"} />}
          />
          <Route
            path='/projects'
            render={(props) => <Projects {...props} sectionTitle={"Personal Projects"} icon={"file-alt"} type={"project"} />}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
      </Router>
    </AnimatePresence>
  );
}

export default App;