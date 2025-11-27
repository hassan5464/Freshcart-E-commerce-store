import React from "react";
import img from "/img.jpg";
import { Rating } from "react-simple-star-rating";

const PopularProductsSec = () => {
  return (
    <section className="my-10 " id="featuredProduct">
      <div className="container flex flex-col gap-10">
        <div id="Popular Products">
          <div id="title" className="mb-10 relative flex ">
            <h2>Popular Products</h2>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 ">
              {[1,2].map((item,index)=>(
                <div key="index" >
                  <div className="flex p-4 flex-col   border rounded border-gray-300 hover:border-(--primary) cursor-pointer hover:shadow-lg transition duration-300">
                    <div className="flex justify-center ">
                      <img src={img} width={"80px"} height="120px" />
                    </div>
                    <p className="text-gray-600 text-[14px]">Snack & Munchies</p>
                    <h3 className="bold">Haldiram's sev</h3>
                    <div className="flex gap-2">
                      <div className="flex items-center " style={{display: "inline-block"}}>

                      
                      <Rating 
                        size={16}
                        initialValue={3}
                        fillColor="#ffb700"
                        emptyColor="gray"
                        allowHover={true}
                        
                        className="simple-star-rating"
                        transition
                        readonly={true} 
                        />
                        </div>
                        <p>2333</p>
                        <p>4.5</p>
                    </div>

                      <p>attention</p>
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

export default PopularProductsSec;
