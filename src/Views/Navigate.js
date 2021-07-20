import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigate(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Technology Partners Employee Map
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/login">
                  Login
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/create" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/create">
                  Create
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/map" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/map">
                  Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigate);