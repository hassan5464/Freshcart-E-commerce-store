import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../images/img.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img7.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img8.jpg";
import {useMediaQuery} from "react-responsive"
const FeaturedProductSec = () => {
const isMobile = useMediaQuery({maxWidth: 767})

  const settings = {
    dots: false,
    infinte: true,
    speed: 500,
    slidesToShow: isMobile? 2: 4,
    slidToScroll: 1,
    autoplay: true,
    autoplaySpeed : 4000,
    accessibility: true,
    easing: "linear",
    style: {margin: "10px" },

  };



  const images = [
    {
      image: img,
      header: `Midnight Munch Combo`,
    },
    {
      image: img1,
      header: "SuperMarket ",
    },
    {
      image: img2,
      header: `Opening Sales`,
    },
    {
      image: img3,
      header: `Opening Sales`,
    },
    {
      image: img4,
      header: `Opening Sales`,
    },
    {
      image: img5,
      header: `Opening Sales`,
    },
    {
      image: img6,
      header: `Opening Sales`,
    },
  ];

  return (
    <>
      <section className="my-10 " id="featuredProduct">
        <div className="container">
          <div id="title" className="mb-10">
            <h2>Featured Categories</h2>
          </div>
          <div >
          <Slider {... settings } className="">
          
              {images.map((image,index) =>(
                <div key={index} className="border py-6 border-gray-300 rounded hover:border-(--primary) cursor-pointer hover:shadow-lg transition duration-300 " style={{margin: "20px"}}>
                  <div className="flex flex-col gap-4 items-center justify-center" >
                    <img src={image.image} width={"120px"} height="120px"/>
                    <h3>{image.header}</h3>
                  </div>
                  
                </div>
              ))}
              
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProductSec;
