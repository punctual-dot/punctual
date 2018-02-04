import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Food from "./pages/Food";
import BigCalendar from "./pages/BigCalendar";
import Toggle from "./pages/Toggle/Toggle.js";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/bigcalendar" component={BigCalendar} />
        <Route exact path="/toggle" component={Toggle} />
        <Route component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
