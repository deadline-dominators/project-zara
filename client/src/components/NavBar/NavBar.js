import "./NavBar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function NavBar() {

  const location = useLocation();

  return (
    <div className="NavBar">
      <div className="NavContainer">
        <div className="NavWrapper">
          <h1 className="Logo">Exclusive</h1>
          <ul className="NavLinks">
            <li>
              <Link className={`link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li>
              <Link className={`link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
            </li>
            <li>
              <Link className={`link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
            </li>
            <li>
              <Link className={`link ${location.pathname === '/singup' ? 'active' : ''}`} to="/singup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="NavDetails">
          <div className="SearchBar">
            <input
              className="Search"
              type="text"
              placeholder="What are you looking for?"
            />
            <i className="bi bi-search"></i>
          </div>
          <i className="bi bi-heart"></i>
          <i className="bi bi-cart3"></i>
        </div>
      </div>
    </div>
  );
}
