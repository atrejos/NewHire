import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Flow from './components/WorkFlow/flow';
import Procedure from './components/ProcedureTable/procedure';
import NewForm from './components/NewCand/NewCandForm';
import CheckboxContainer from './components/ProcedureTable/Checkboxes';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ProcedureTable/procedure">Procedure</Link>
            </li>
            <li>
              <Link to="/WorkFlow/flow">Flow</Link>
            </li>
            <li>
              <Link to="/NewCand/NewCandForm">NewForm</Link>
            </li>
            <li>
              <Link to="/ProcedureTable/Checkboxes">Checkboxes</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/ProcedureTable/procedure">
            <Procedure />
          </Route>
          <Route path="/WorkFlow/flow">
            <Flow />
          </Route>
          <Route path="/NewCand/NewCandForm">
            <NewForm />
          </Route>
          <Route path="/ProcedureTable/Checkboxes">
            <CheckboxContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home - will be log in page</h2>;
}