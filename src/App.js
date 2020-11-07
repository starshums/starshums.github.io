import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;