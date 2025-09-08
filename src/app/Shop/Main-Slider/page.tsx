'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="relative w-full">
   
      <Slider {...settings}>
        <div className="relative">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden">
            <img
              src="https://route-ecommerce-next.vercel.app/_next/image?url=%2Fassets%2Fbanner-1.png&w=3840&q=75"
              alt="banner"
              className="w-full h-full object-cover"
            />

          </div>
        </div>
        
        <div className="relative">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden">
            <img
              src="https://route-ecommerce-next.vercel.app/_next/image?url=%2Fassets%2Fbanner-2.png&w=3840&q=75"
              alt="banner-2"
              className="w-full h-full object-cover"
            />

          </div>
        </div>
      </Slider>
    </div>
  );
}

