import React from 'react'
import '../TopHeader/TopHeader.css'

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="frame">
        <div className="div">
          <p className="text-wrapper">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <div className="text-wrapper-2">ShopNow</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-3">English</div>
          <div className="drop-down-screen">
            {/* <img className="vector" alt="Vector" src="vector.svg" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-chevron-down vector" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
