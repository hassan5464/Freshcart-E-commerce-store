import React, { useState, useRef, useEffect } from "react";
import headerimg1 from "../images/headerimg1.jpg";
import headerimg2 from "../images/headerimg2.jpg";
import headerimg3 from "../images/headerimg3.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header() {




  const settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    slidToScroll: 1,
    autoplay: true,
    autoplaySpeed : 4000,
    accessibility: true,
    easing: "linear",
    mobileFirst: true,
  };

  const images = [
    {
      image: headerimg1,
      header: `Midnight Munch Combo`,
      paragraph:
        "Snack on late-night munchies of delicious nuts & yor're guaranteed happiness before you doze!",
    },
    {
      image: headerimg2,
      header: "SuperMarket For Fresh Grocery", 
      paragraph:
        "introduce a new model for online grocery shopping and convenient home delivery at any time",
    },
    {
      image: headerimg3,
      header: `Opening Sale Discount up to 50%`,
      paragraph:
        "Snack on late-night munchies of delicious nuts & yor're guaranteed happiness before you doze!",
    },
  ];

  return (
    <>
      <header className="py-10 rounded-lg">
        <Slider {... settings }>        
          {images.map((image, index) => {
          return (
            <div key={index} className="relative px-2">
              <img
                className="rounded-lg w-full min-h-64"
                src={image.image}
                alt={image.header}
              />
              <div className="absolute top-10 px-7 ">
                <h3 className={` text-wrap  ${index === 1 ? "text-white": "text-(--footer-color)"} text-[34px] md:w-1/2  font-bold `}>
                  {index == 2 ? <p>Opening Sale Discount up to <span className="text-(--primary)">50%</span></p> : image.header}
                </h3>
                <p className={` ${index === 1 ? "text-white": "text-gray-400"} text-[16px] font-[500] md:w-1/2`}>
                  {image.paragraph}
                </p>
                <button
                  className="!bg-(--footer-color) mt-3 text-[14px] cursor-pointer hover:opacity-70"
                  type="button"
                >
                  Shop Now <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>
          );
        })}
        </Slider>
      </header>
      <sidebar></sidebar>
      <section className="mt-12">
          
      </section>
    </>
  );
}

