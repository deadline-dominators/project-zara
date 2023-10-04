import "../Home.css";
import React, { useEffect, useState } from "react";
import Banner from "../../../assests/banner3.png";
import Banner4 from "../../../assests/banner4.png";

const banners = [
  { id: 1, image: Banner },
  { id: 2, image: Banner4 },
  { id: 3, image: Banner },
];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto slide to the next banner every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner ${currentIndex === index ? 'active' : ''}`}
        >
          <img src={banner.image} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;
