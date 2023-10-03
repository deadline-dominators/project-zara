import React, { useState } from "react";
import "./card.css";
const Card = (props) => {
  const [incr, setInc] = useState(0);
  const [total, setTotal] = useState(0);
  const sum = props.cardsData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  setTotal(sum);
  const increment = () => {
    incr = incr + 1;
    setInc(incr);
    return incr;
  };
  const decrement = () => {
    incr = incr - 1;
    setInc(incr);
    return incr;
  };
  return (
    <div class="cart">
      <div class="div">
        <div class="top-header">
          <div class="frame"></div>
        </div>

        <div class="line"></div>
        <div class="frame-9">
          <div class="frame-10">
            <div class="frame-11">
              <div class="cart-main-section">
                <div class="frame-12">
                  <div class="text-wrapper-8">Product</div>
                  <div class="text-wrapper-8">Price</div>
                  <div class="text-wrapper-8">Quantity</div>
                  <div class="text-wrapper-8">Subtotal</div>
                </div>
              </div>
              {props.cardsData.map((e) => {
                <div class="cart-section">
                  <div class="text-wrapper-9">${e.price}</div>
                  <div class="text-wrapper-10">${e.price * incr}</div>
                  <div class="quantity">
                    <div class="frame-15">
                      <div
                        type="number"
                        id="tentacles"
                        name="tentacles"
                        min="10"
                        max="100"
                        class="text-wrapper-11"
                      >
                        incr
                      </div>
                      <div class="frame-14">
                        <img
                          class="img-3"
                          src="img/drop-up-small-2.svg"
                          onClick={() => {
                            increment();
                          }}
                        />
                        <img
                          class="img-3"
                          src="img/drop-down-small-2.svg"
                          onClick={() => {
                            decrement();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="gamepad-cart-small">
                    <img class="g-x" src={e.image} />
                  </div>
                  <div class="text-wrapper-12">{e.name}</div>
                </div>;
              })}
            </div>

            <div class="frame-16">
              <button class="button">
                <div class="view-all-products" onClick={() => {}}>
                  Return To Shop
                </div>
              </button>
              <button class="button">
                <div class="view-all-products">Update Cart</div>
              </button>
            </div>
          </div>
          <div class="frame-17">
            <div class="frame-18">
              <div class="frame-19">
                <div class="text-wrapper-13">Coupon Code</div>
              </div>
              <button class="view-all-products-wrapper">
                <div class="view-all-products-2">Apply Coupon</div>
              </button>
            </div>
            <div class="frame-20">
              <div class="text-wrapper-14">Cart Total</div>
              <div class="frame-21">
                <div class="text-wrapper-8">Subtotal:</div>
                <div class="text-wrapper-8">${total}</div>
              </div>
              <div class="frame-22">
                <div class="text-wrapper-8">Shipping:</div>
                <div class="text-wrapper-8">Free</div>
              </div>
              <div class="frame-23">
                <div class="text-wrapper-8">Total:</div>
                <div class="text-wrapper-8">${total}</div>
              </div>
              <button class="button-2">
                <div class="view-all-products-2">Procees to checkout</div>
              </button>
              <div class="under-line">
                <img class="line-2" src="img/line-1-2.svg" />
              </div>
              <div class="line-wrapper">
                <img class="line-2" src="img/line-1.svg" />
              </div>
            </div>
          </div>
        </div>

        <div class="roadmap">
          <div class="account">Home</div>
          <img class="line-3" src="img/line-13.svg" />
          <div class="nothing">Cart</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
