import "../Home.css";
import React from "react";

function LandinPage() {
  return (
    <div className="List">
      <ul className="ListItems">
        <li className="Options1"><span>Woman's Fashion</span><i class="bi bi-chevron-right"></i></li>
        <li className="Options2"><span>Men's Fashion</span><i class="bi bi-chevron-right"></i></li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>
  )
}

export default LandinPage;
