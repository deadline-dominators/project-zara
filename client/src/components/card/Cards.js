import "./cards.css";
import React from "react";
import ArrowUp from "../../assests/Drop-Down-Small.svg";
import ArrowDown from "../../assests/Drop-Up-Small.svg";
import CancelIcon from "../../assests/icon-cancel.svg";
import Screen from "../../assests/ecran.png";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="CardContainer">
      <div className="AllContainer">
        <div className="Product_Added">
          <div className="titles">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="Products">
            <div className="OneProduct">
              <div className="Product">
                <div className="ProductIMG">
                  <img id="Cancel" src={CancelIcon} alt="" />
                  <img id="screen" src={Screen} alt="" />
                </div>
                <p>LCD Monitor</p>
              </div>
              <p className="price">$650</p>
              <div className="Quantity">
                <p>01</p>
                <div className="arrow">
                  <img src={ArrowDown} alt="" />
                  <img src={ArrowUp} alt="" />
                </div>
              </div>
              <p className="subTotal">$650</p>
            </div>
            <div className="OneProduct">
              <div className="Product">
                <div className="ProductIMG">
                  <img id="Cancel" src={CancelIcon} alt="" />
                  <img id="screen" src={Screen} alt="" />
                </div>
                <p>LCD Monitor</p>
              </div>
              <p className="price">$650</p>
              <div className="Quantity">
                <p>01</p>
                <div className="arrow">
                  <img src={ArrowDown} alt="" />
                  <img src={ArrowUp} alt="" />
                </div>
              </div>
              <p className="subTotal">$650</p>
            </div>
            <div className="OneProduct">
              <div className="Product">
                <div className="ProductIMG">
                  <img id="Cancel" src={CancelIcon} alt="" />
                  <img id="screen" src={Screen} alt="" />
                </div>
                <p>LCD Monitor</p>
              </div>
              <p className="price">$650</p>
              <div className="Quantity">
                <p>01</p>
                <div className="arrow">
                  <img src={ArrowDown} alt="" />
                  <img src={ArrowUp} alt="" />
                </div>
              </div>
              <p className="subTotal">$650</p>
            </div>
          </div>
          <div className="btnss">
            <Link to="/" className="btn">Return To Shop</Link>
            <Link className="btn">Update Cart</Link>
          </div>
        </div>

        <div className="Card_Calculation">
          <div className="coupon">
            <div id="input_border">
              <input type="text" placeholder="Coupon Code" />
            </div>
            <button>Apply Coupon</button>
          </div>
          <div className="total">
            <p>Cart Total</p>
            <div className="line">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="line">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div>
              <p>Total:</p>
              <p>$1750</p>
            </div>
            <button>Procees to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
