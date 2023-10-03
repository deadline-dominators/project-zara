import "./NavBar.css"
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavContainer">
        <div className="NavWrapper">
          <h1 className="Logo">Exclusive</h1>
          <ul className="NavLinks">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>About</li>
            <li>Sign Up</li>
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
