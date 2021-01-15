import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './containers/Projects';
import About from "./components/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Route
        path='/projects'
        render={(props) => <Projects {...props} sectionTitle={"Personal Projects"} icon={"file-alt"} type={"project"} />}
      />
      <Route
        path='/projects'
        render={(props) => <Projects {...props} sectionTitle={"Games"} icon={"gamepad"} type={"game"} />}
      />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;