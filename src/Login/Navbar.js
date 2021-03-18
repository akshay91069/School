import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/Logout" className="Link">
        logout
      </Link>

      <Link to="/about" className="Link">
        About
      </Link>

      <Link to="/Home" className="Link">
        Home
      </Link>
      <Link to="/User" className="Link">
        User
      </Link>
    </div>
  );
}

export default Navbar;
