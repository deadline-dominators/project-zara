import React,{useState} from "react"
import "./cards.css"

const Card=(props)=>{
const [incr,setInc]=useState(0)
const [total,setTotal]=useState(0)
// const sum = props.cardsData.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.price,
//   0,
// )
// setTotal(sum)


const increment =()=>{
 incr= incr+1
 setInc(incr)
 return incr

}
const decrement =()=>{
  incr= incr-1
  setInc(incr)
  return incr
 
 }
return (

  <div className="cart">
  <div className="div">
    <div className="top-header">
      <div className="frame">
       
       
      </div>
    </div>
   
    <div className="line"></div>
    <div className="frame-9">
      <div className="frame-10">
        <div className="frame-11">
          <div className="cart-main-section">
            <div className="frame-12">
              <div className="text-wrapper-8">Product</div>
              <div className="text-wrapper-8">Price</div>
              <div className="text-wrapper-8">Quantity</div>
              <div className="text-wrapper-8">Subtotal</div>
            </div>
          </div>
          {/* {props.cardsData.map((e)=>{ */}
          <div className="cart-section">

            <div className="text-wrapper-9">$55</div>
            <div className="text-wrapper-10">{incr*55}</div>
            <div className="quantity">
              <div className="frame-15">
            
                {/* <div type="number" id="tentacles" name="tentacles" min="10" max="100" className="text-wrapper-11"></div> */}
                <div className="frame-14">
                  <input  className="img-3" type="number" id="quantity" name="quantity" min="1" max="5" onChange={(e)=>{setInc(e.target.value)}} />
                </div>
              </div>
            </div>
        <div className="gamepad-cart-small"><img className="g-x" src= "fzf" /></div>
            <div className="text-wrapper-12">fzf</div>
          </div>
              {/* })} */}
        </div>
  
        <div className="frame-16">
          <button className="button"><div className="view-all-products" onClick={()=>{}}>Return To Shop</div></button>
          <button className="button"><div className="view-all-products">Update Cart</div></button>
        </div>
      </div>
      <div className="frame-17">
        <div className="frame-18">
          <div className="frame-19"><div className="text-wrapper-13">Coupon Code</div></div>
          <button className="view-all-products-wrapper"><div className="view-all-products-2">Apply Coupon</div></button>
        </div>
        <div className="frame-20">
          <div className="text-wrapper-14">Cart Total</div>
          <div className="frame-21">
            <div className="text-wrapper-8">Subtotal:</div>
            <div className="text-wrapper-8">$z</div>
          </div>
          <div className="frame-22">
            <div className="text-wrapper-8">Shipping:</div>
            <div className="text-wrapper-8">Free</div>
          </div>
          <div className="frame-23">
            <div className="text-wrapper-8">Total:</div>
            <div className="text-wrapper-8">${total}</div>
          </div>
          <button className="button-2"><div className="view-all-products-2">Procees to checkout</div></button>
         <div className="under-line"><img className="line-2" src="img/line-1-2.svg" /></div>
          <div className="line-wrapper"><img className="line-2" src="img/line-1.svg" /></div>
        </div>
      </div>
    </div>
 
    <div className="roadmap">
      <div className="account">Home</div>
       <img className="line-3" src="img/line-13.svg" /> 
      <div className="nothing">Cart</div>
    </div>
  </div>
</div>
    
    

)


}


export default Card