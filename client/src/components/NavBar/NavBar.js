import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavContainer">
        <div className="NavWrapper">
          <h1 className="Logo">Exclusive</h1>
          <ul className="NavLinks">
            <li>Home</li>
            <li>Contact</li>
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
            <i class="bi bi-search"></i>
          </div>
          <i class="bi bi-heart"></i>
          <i class="bi bi-cart3"></i>
        </div>
      </div>
    </div>
  );
}
