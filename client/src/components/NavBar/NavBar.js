import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavContainer">
        <div className="NavWrapper">
          <h1 className="Logo">Exclusive</h1>
          <ul className="NavLinks">
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/contact">Contact</Link>
            </li>
            <li><Link className="link" to="/contact">About</Link></li>
            <Link className="link" to="/singup">
              <li>Sign Up</li>
            </Link>
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
