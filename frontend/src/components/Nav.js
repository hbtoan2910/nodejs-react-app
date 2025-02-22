import React from "react"; //ES6 js
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMainMenu"
        aria-controls="navMainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navMainMenu" className="navbar-collapse collapse">
        <div className="navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/tweets" className="nav-item nav-link">
            Tweets
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
