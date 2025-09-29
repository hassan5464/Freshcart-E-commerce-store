import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from "../images/img.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img7.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img8.jpg";
import { useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";


const FeaturedProductSec = () => {

  const swiper = useSwiper();





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
            <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
          </div>
          <div className=" ">
            <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={3} 
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },  
              1024: { slidesPerView: 4 }, }}
              navigation

              

                >

              {images.map((image,index) =>(
                <SwiperSlide key={index}>

                <div  className="border py-14  border-gray-300 rounded  hover:border-(--primary) cursor-pointer hover:shadow-lg transition duration-300 "  >
                  <div className="flex flex-col  gap-4 items-center justify-center" >
                    
                    <img src={image.image} width={"100px"} height="120px"/>
                    <h3>{image.header}</h3>
                  </div>
                  
                </div>
                </SwiperSlide>
              ))}
              </Swiper>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProductSec;
