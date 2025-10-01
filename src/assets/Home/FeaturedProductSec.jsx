import React, { useRef } from "react";
import img from "../images/img.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img7.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProductSec = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
          <div id="title" className="mb-10 relative flex item-scenter">
            <h2>Featured Categories</h2>
            <div className="absolute top-0 right-0 flex gap-2 ">
                <button
                  ref={nextRef}
                  className=" arrow "
                  >
                  <ChevronLeft />
                </button>
                <button
                  ref={prevRef}
                  className="arrow   "
                  >
                  <ChevronRight />
                </button>
              </div>
          </div>
          <div className="">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              slidesPerView={3}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="border py-10  border-gray-300 rounded  hover:border-(--primary) cursor-pointer hover:shadow-lg transition duration-300 ">
                    <div className="flex flex-col  gap-4 items-center justify-center">
                      <img src={image.image} width={"100px"} height="120px" />
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
