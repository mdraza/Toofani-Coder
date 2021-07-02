import React from "react";
import {Link, NavLink} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <div className="container">
          <NavLink exact className="navbar-brand" to="/">
            Logo
          </NavLink>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <Link className="btn btn-outline-light" to="/user/adduser">Add User</Link>
        </div>
        
      </nav>
    </div>
  );
}

export default Nav;
