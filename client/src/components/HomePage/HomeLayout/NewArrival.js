import './ProductShow.css'
import './NewArrival.css'
import React from "react";
import ps5 from '../../../assests/PlayStation 5.png'
import woman from '../../../assests/Women’s Collections.png'
import speaker from '../../../assests/Frame 686.png'
import perfume from '../../../assests/Frame 687.png'

function NewArrival() {
  return (
    <div>
      <div className="OurProduct_title">
        <div className="frameTitle">
          <div className="redIcon"></div>
          <p>Our Products</p>
        </div>
        <p className="frameTitle_underTitle">Explore Our Products</p>
      </div>
      <div className='gallery'>
        <div className='first_ps5'>
            <img src={ps5} alt='' />
        </div>
        <div className='second_elec'>
            <div className='woman'>
                <img src={woman} alt='' />
            </div>
            <div className='secon_child'>
                <div className='speaker'>
                    <img src={speaker} alt='' />
                </div>
                <div className='perfume'>
                    <img src={perfume} alt='' />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
