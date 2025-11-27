import React from "react";
import img from "/img.jpg";
import { Eye, Heart, Star, StarHalf } from "lucide-react";

const PopularProductsSec = () => {

  const ratings = [1,2,3,4,5].map((rate)=> rate * Math.random(2 * rate))


  return (
    <section className="my-10 " id="featuredProduct">
      <div className="container flex flex-col gap-10">
        <div id="Popular Products">
          <div id="title" className="mb-10 relative flex ">
            <h2>Popular Products</h2>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 ">
              {[1,2,3,4,5,6].map((item,index)=>(
                <div key="index" >
                  <div className="flex relative  p-4 flex-col gap-1 min-h-[300px]  border rounded border-gray-300 hover:border-(--primary) cursor-pointer hover:shadow-lg transition duration-300">
                      <div className="absolute flex  gap-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button className="!bg-gray-50 t hover:!bg-(--primary)  shadow-lg ">
                          <Eye className="w-4 text-black hover:text-white" />
                        </button>
                        <button className="!bg-gray-50 hover:!bg-(--primary) shadow-lg">
                        <Heart className="text-black w-4 hover:text-white" />
                        </button>
                        <button className="text-black">
                          <Star />
                        </button>
                      </div>
                    <div className="flex grow   justify-center mb-1">
                      <img src={img} width={"80px"} height="120px" className="object-contain" />
                    </div>
                    <p className="text-gray-600 text-[14px]">Snack & Munchies</p>
                    <h3 className="bold">Haldiram's sev</h3>
                    <div className="flex  gap-2">
                        <div className="flex ">
                          {[1,2,3,4,5].map(()=>(
                        <Star className="text-[#FFD700] w-3.5  fill-[#FFD700]"/>
                          ))}
                        </div>
                        <p>4.5</p>
                    </div>
                      <div className="flex justify-between">
                        <div id="price">
                          $12.00
                        </div>
                        <div id="addToCart" className="bg-(--primary) px-2 rounded text-white py-1">
                          + Add
                        </div>
                      </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
{/* <StarHalf className="text-[#FFD700] w-4 fill-[#FFD700]"/> */}
export default PopularProductsSec;
