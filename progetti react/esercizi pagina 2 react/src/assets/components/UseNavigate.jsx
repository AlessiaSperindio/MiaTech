
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Supponendo che tu abbia già i componenti Home e About
import Home from "src/pages/Home"
import About from "src/pages/About"

function App() {
  return (
    <Router>
      <nav>
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;