import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="option">
        Home
      </Link>
      <Link to="/about" className="option">
        About
      </Link>
    </div>
  );
}
export default Navbar;
