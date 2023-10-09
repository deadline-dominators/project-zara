import "./Home.css";
import "./contact.css"
import React, { useState } from "react";
import Ecran from "../../assests/ecran.png";
import Stars from "../../assests/vector.png";
import { Link } from "react-router-dom";


function FlashSalesProducts({product}){
  const [tab,setTab]=useState([])
  tab.push(product)
  setTab(tab)
  return (
    <a className="cart-with-flat-discount1">
    <div className="discount-percent-parent">
      <div className="discount-percent">
        <div className="new">-35%</div>
      </div>
      <div className="rectangle-div" />
      <div className="add-to-cart" onClick={()=>{ <Link to ="/cart"  state={{tab:tab}} ></Link>}}>Add To Cart</div>
      <div className="fill-heart-parent">
        <i class="bi bi-heart fill-heart-icon"></i>
      </div>
      <div className="ak-900-01-500x500-1-wrapper">
        <img
          className="ak-900-01-500x500-1-icon"
          alt=""
          src={product.firstImage}
        />
      </div>
    </div>
    <div className="havit-hv-g92-gamepad-parent">
      <div className="shop-now">{product.name}</div>
      <div className="parent1">
        <div className="shop-now">${product.price}</div>
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
