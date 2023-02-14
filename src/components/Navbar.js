import React from "react";
import "./css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="leftSec">Student</div>
      <div className="rightSec">
        <NavLink to="/" className="navlink">
          Dashboard
        </NavLink>
        <NavLink to="/manage-permissions" className="navlink">
          Manage Permissions
        </NavLink>
        <NavLink to="/request-reference" className="navlink">
          Request Reference
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
