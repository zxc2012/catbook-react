import React, { Component } from "react";

import "./NavBar.css";
import { Link } from "@reach/router";
/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <nav className="NavBar-container">
        <div className="NavBar-title  u-inlineBlock">Catbook</div>
        <div className="NavBar-container u-inlineBlock">
        <Link to="/" className="NavBar-link">Home</Link>
        <Link to="/profile" className="NavBar-link">Profile</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
