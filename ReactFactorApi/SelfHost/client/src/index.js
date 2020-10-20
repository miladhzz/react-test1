import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Search from "./Components/Item/search"
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, NavLink  } from 'react-router-dom'

const routing = (
  <Router>
    <div className="m-3">
    <ul className="nav nav-pills justify-content-center">
      <li>
          <NavLink to="/search" className="nav-link">جستجو</NavLink>
      </li>
      <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>خانه</NavLink>
       </li>
      </ul>
      <br/>
      <Route exact  path="/" component={App} />
      <Route path="/search" component={Search} />
    </div>
    
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
