import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Home from "./components/home";

import Survey from "./components/students-survey";
import PathWay from "./components/PathWayCard";
import Profile from "./components/profile";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <Router>
      <Navbar />

        <Route path="/" exact component={Home} />

        <Route path="/profile" exact component={Profile} />
        <Route path="/survey" render={() => <Survey />} />
        <Route path="/pathWay" render={() => <PathWay />} />
        <Route path="/students/" component={StudentInfo} />

      <Footer />
    </Router>
  );
}

export default App;
