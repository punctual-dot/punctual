import React, { Component } from 'react';
import "../Nav/nav.css";
import Jumbotron from "../Jumbotron/Jumbotron.js"
// import { Navbar, Button } from 'react-bootstrap';


class AppAuth extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (

      <div>
        <ul>
          <li className="item">
            <a href="/"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </a>
          </li>


            {
              !isAuthenticated() && (
              <li className="item">
                  <a href="/profile"
                    id="qsLoginBtn"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </a>
              </li>
                )
            }
            {
              isAuthenticated() && (
                <li className="item">
                  <a href="/"
                    id="qsLogoutBtn"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </a>
                </li>
                )
            }
            <li className="item"><a href="/profile">settings</a></li>
            <img src="https://i.imgur.com/mWRPZ4W.png" className="nav-logo" alt="punctual logo" width="auto" height="70px"></img>

        </ul>

      </div>
    );
  }
}


export default AppAuth;
