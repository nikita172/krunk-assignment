import React from 'react';
import "./products.css";
import bag from "../../assets/images/bag.jpg";
import verified from "../../assets/images/verified.png";
import grayArrow from "../../assets/images/grayArrow.png";

const Products = () => {
  return (
    <div className='productContainer'>
      <div className="bagDetailsContainer">
        <div className="bagDetailTop">
          <img className='bagImg' src={bag} />
          <div className="bagDetailRight">
            <div className='rightFirst'>
              <span>Bags on <span className='timpu'>Timpu</span></span>
              <img src={verified} />
            </div>
            <div className='rightSecond'>
              <span>1123 products</span>
              <img src={grayArrow} />
            </div>
          </div>
        </div>
        <div className="bagDetailBottom">
          Or set filter and help us choose the best bag for you.
        </div>

      </div>
      <div className="time">
        4:48 PM
      </div>
    </div>
  )
}

export default Products