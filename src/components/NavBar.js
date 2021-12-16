import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class NavBar extends React.Component {
  render() {
      return (
          <div className="NavBar">
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
          </div>
      )
  }
}

export default NavBar;