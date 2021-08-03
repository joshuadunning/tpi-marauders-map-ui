import React from "react";
import { Link, withRouter } from "react-router-dom";
import {BiFullscreen} from "react-icons/bi"

function Navigate(props) {

  const toggleFullscreen = () => {
      const el = document.getElementById('map')
      el.requestFullscreen()
  }

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Technology Partners Employee Map
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/login">
                  Login
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/create" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/create">
                  Sign Up
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/map" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/map">
                  Map
                </Link>
              </li>
            </ul>
          </div>
          <BiFullscreen className={'fullscreen-icon'} onClick={toggleFullscreen}/> 

        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigate);