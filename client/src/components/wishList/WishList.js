import "./WishList.css";
import React from "react";
import Product from "../HomePage/FlashSalesProducts.js";

function WishList() {
  return (
    <div className="main_container">
      <div className="wishList">
        <div className="wishList_container">
          <div className="btns">
            <p>Wishlist (4)</p>
            <button>Move All To Bag</button>
          </div>
          <div className="productCards">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div className="JustForYou">
          <div className="JustForYou_btns">
            <div className="title">
              <div className="red"></div>
              <p>Just For You</p>
            </div>
            <button>See All</button>
          </div>
          <div className="suggestion">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
