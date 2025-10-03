import React, { useRef } from "react";
import img from "/img.jpg";
import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img7.jpg";
import img4 from "/img4.jpg";
import img5 from "/img5.jpg";
import img6 from "/img8.jpg";
import banner from "/grocery-banner-2.jpeg";
import banner2 from "/grocery-banner.png";
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
      header: `Midnight Munch `,
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
        <div className="container flex flex-col gap-10">
          <div id="categories">
            <div id="title" className="mb-10 relative flex ">
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
                spaceBetween={10}
                slidesPerView={2}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 6 },
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
          <div id="img" className="flex md:flex-row flex-col gap-8">
            <div className="relative ">
              <img src={banner2} alt="grocery-banner" className="w-full boject-cover"/>
              <div className="absolute top-5 left-5">
                <h2>Fruits & Vegetables</h2>
                <p>Get Upto 30% off</p>
                <button className="!bg-(--footer-color) mt-3 text-[14px] cursor-pointer hover:opacity-70" type="button">
                  Shop Now
                  </button>
              </div>
            </div>
            <div className="relative">
              <img src={banner} className="w-full object-cover" />
              <div className="absolute top-5 left-5">
                <h2>Freshly Baked Buns</h2>
                <p>Get Upto 25% off</p>
                <button className="!bg-(--footer-color) mt-3 text-[14px] cursor-pointer hover:opacity-70" type="button">
                  Shop Now
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProductSec;
