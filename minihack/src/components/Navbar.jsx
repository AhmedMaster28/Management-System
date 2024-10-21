// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-around">
          <Link className="navbar-brand" to="/Dashboard">
            Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex justify-content-end"></div>

           <Link to='/'> <button className="btn btn-danger" type="submit">
              Logout
            </button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
