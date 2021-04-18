import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { nanoid } from "nanoid";

// Pages
import Index from "./pages/Index";
import Counter from "./pages/Counter";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import User from "./pages/User";

// Style
import "./App.css";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./_actions";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <Router basename="/">
        <header>
          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users">Users (Entry when counter &gt;15)</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/user/Example">User</Link>
            </li>
          </ul>
        </header>
        <hr />

        <ul>
          <li>
            <button
              onClick={() => {
                dispatch(increment(10));
              }}
            >
              +10
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(decrement(10));
              }}
            >
              -10
            </button>
          </li>
          <li>
            Random ID: <em>{nanoid()}</em>
          </li>
          <li>
            Counter stage: <strong>{counter}</strong>
          </li>
        </ul>

        <hr />
        <div className="page">
          <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/counter" component={Counter} exact />
            <Route path="/users" exact>
              {counter > 15 ? <Users /> : <Redirect to="/counter" />}
            </Route>
            <Route path="/todos" component={Todos} exact />
            <Route path="/user/:name" component={User} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
