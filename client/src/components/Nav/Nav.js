import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Punctual.
        </a>
      </div>
      <p className="navbar-text navbar-right">Signed in as <a href="/profile" className="navbar-link">Jang Yurai</a></p>
    </div>
  </nav>;

export default Nav;
