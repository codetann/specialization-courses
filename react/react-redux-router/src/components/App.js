import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  );
}
