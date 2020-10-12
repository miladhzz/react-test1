import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Search from "./Components/Item/search"
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Link  } from 'react-router-dom'

const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/search">جستجو</Link>
        </li>
        
      </ul>
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
