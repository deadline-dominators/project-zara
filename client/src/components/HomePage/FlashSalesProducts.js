import "./Home.css";
import "./contact.css"
import React from "react";
import Ecran from "../../assests/ecran.png";
import Stars from "../../assests/Vector.png";

function FlashSalesProducts() {
  return (
    <a className="cart-with-flat-discount1">
    <div className="discount-percent-parent">
      <div className="discount-percent">
        <div className="new">-35%</div>
      </div>
      <div className="rectangle-div" />
      <div className="add-to-cart">Add To Cart</div>
      <div className="fill-heart-parent">
        <i class="bi bi-heart fill-heart-icon"></i>
      </div>
      <div className="ak-900-01-500x500-1-wrapper">
        <img
          className="ak-900-01-500x500-1-icon"
          alt=""
          src={Ecran}
        />
      </div>
    </div>
    <div className="havit-hv-g92-gamepad-parent">
      <div className="shop-now">AK-900 Wired Keyboard</div>
      <div className="parent1">
        <div className="shop-now">$960</div>
        <div className="div6">$1160</div>
      </div>
      <div className="five-star-parent">
        <div className="five-star">
          <i class="bi bi-star vector-icon"></i>
          <i class="bi bi-star vector-icon"></i>
          <i class="bi bi-star vector-icon"></i>
          <i class="bi bi-star vector-icon"></i>
          <i class="bi bi-star vector-icon"></i>
        </div>
        <div className="div7">(75)</div>
      </div>
    </div>
  </a>
  );
}

export default FlashSalesProducts;
