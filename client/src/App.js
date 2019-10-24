import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/procedure">Procedure Form</Link>
          </li>
          <li>
            <Link to="/flow">Flow Diagram</Link>
          </li>
        </ul>
        <Route exact path="/" component={'./components/Home'} />
        <Route path="/procedure" component={'./components/procedure'} />
        <Route path="/flow" component={'./component/flow'} />
      </div>
    </Router>
  );
}

export default App;
