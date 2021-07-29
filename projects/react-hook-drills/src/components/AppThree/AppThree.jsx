import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Pokemon from "./Pokemon";

export default function AppThree() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:name/:id" component={Pokemon} />
      </Switch>
    </Router>
  );
}
