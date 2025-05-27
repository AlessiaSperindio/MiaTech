//Aggiungi collegamenti di navigazione tra le pagine Home e About nel componente App.

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import Home from '../../pages/Home';
import About from '../../pages/About';

const UseNavigate() {
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

export default UseNavigate;