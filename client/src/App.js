import React from 'react';
import { Route, Router } from 'react-router-dom';
import Main from "./pages/Main";
import Jumbotron from "./components/Jumbotron";
import Profile from "./pages/Profile";
import Food from "./pages/Food";
import BigCalendar from "./pages/BigCalendar";
import Toggle from "./pages/Toggle/Toggle.js";
import Callback from "./Callback/Callback.js";
import Auth from "./Auth/Auth";
import history from "./history";
import AppAuth from "./components/AppAuth/AppAuth.js";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


const App = () => (
  <Router history={history}>
    <div>
     
    
      {/*<Route exact path="/" component={Main} */}
      <Route path="/" render={(props) => <AppAuth auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <Main auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} /> 
      }}/>
      <Jumbotron />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/food" component={Food} />
      <Route exact path="/bigcalendar" component={BigCalendar} />
      <Route exact path="/toggle" component={Toggle} />
    </div>
  </Router>
);

export default App;
