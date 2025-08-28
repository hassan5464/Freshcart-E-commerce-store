import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navimg from "../images/freshcart-logo.svg"
import Signin from "../Auth/Signin";

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      
        <nav className="bg-white z-20 mx-auto top-0 max-h-24 py-4">
          <div className=" flex container  items-center justify-between  ">
            <div className="shrink-0 order-none ">
              <Link to="/" className="">
                <img
                  src={navimg}
                  className="md:h-10 h-8"
                  alt="Fresh cart Logo"
                />
              </Link>
            </div>

            <div className="lg:flex flex-1 order-none items-center justify-between hidden  font-medium  rounded-lg    ">
              <div>
                <ul className=" flex  justify-center itmes-center text-[18px] xl:text-[24px]">
                  <li>
                    <Link
                      to="#"
                      className="block py-2 px-3 md:!text-[#001e2b] text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-200   md:hover:bg-[#001e2b]   "
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 px-3 md:!text-[#001e2b] text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-200  md:hover:bg-[#001e2b]   transition duration-150 "
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 px-3 md:!text-[#001e2b] text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-200  md:hover:bg-[#001e2b]   transition duration-150"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 px-3 md:!text-[#001e2b] text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-200  md:hover:bg-[#001e2b]   transition duration-150 "
                    >
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 px-3 md:!text-[#001e2b] text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-200  md:hover:bg-[#001e2b]   transition duration-150"
                    >
                      Brands
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="  flex  items-center justify-center gap-2  p-2  ">
                <Link to="#">
                  <i className="fa-solid fa-cart-shopping  py-2 px-2 text-[22px] md:!text-[#001e2b] text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-200  md:hover:bg-[#001e2b]   transition duration-150 "></i>
                </Link>
                <Link to="#">
                  <i className="fa-regular fa-heart py-2 px-2 text-[22px] md:!text-[#001e2b] text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-200  md:hover:bg-[#001e2b]   transition duration-150  "></i>
                </Link>
                <Link
                  to="#"
                  className="py-1 px-1 text-[20px] text-nowrap md:!text-[#001e2b] text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-200  md:hover:bg-[#001e2b]   transition duration-150  "
                >
                  Log out
                </Link>
              </div>
            </div>

            <div className="flex  items-center ">
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-white cursor-pointer hidden md:flex focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Register
              </button>
              <button
                type="button"
                onClick={() => <Signin />}
                className="text-white cursor-pointer hidden md:flex focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => {
                  isOpen ? setIsOpen(false) : setIsOpen(true);
                }}
                className=" lg:hidden cursor-pointer rounded-md p-2 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className=" -inset-0.5" />
                <span className="sr-only">Open main menu</span>

                {isOpen ? (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    /> 
                  </svg>
                ) : (
                  <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div
              className={` ${isOpen ? "" : "hidden"}
                  absolute top-20 z-20 w-1/2 right-0 rounded-lg mr-2 bg-(--footer-color)`}
              id="navbar-sticky"
            >
              <div className="flex flex-col p-3 md:p-0 mt-4 font-medium  rounded-lg   bg-[#001E2B] ">
                <div>
                  <ul className="ml-2 flex flex-col gap-1 md:gap-0 justify-center itmes-center text-[20px]">
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-3  text-white hover:!text-(--primary)  rounded-sm hover:bg-gray-100  "
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-3  text-white hover:!text-(--primary) rounded-sm hover:bg-gray-100    "
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-3  text-white hover:!text-(--primary) rounded-sm hover:bg-gray-100  "
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-3  text-white rounded-sm hover:!text-(--primary) hover:bg-gray-100    "
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-3  text-white rounded-sm hover:!text-(--primary) hover:bg-gray-100"
                      >
                        Brands
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="  flex flex-wrap items-center justify-center gap-4  p-2   mt-3 ">
                  <Link to="#">
                    <i className="fa-solid fa-cart-shopping text-white hover:text-(--primary) text-[30px] hover:bg-gray-100 rounded-sm py-2 px-3 "></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-regular fa-heart text-white hover:text-(--primary) text-[30px] hover:bg-gray-100 rounded-sm py-2 px-3 "></i>
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-(--primary) text-[30px] hover:bg-gray-100 rounded-sm py-2 px-3 "
                  >
                    Log Out
                  </Link>
                  <Link
                    to="#"
                    onClick={() => navigate("/register")}
                    className="text-white md:hidden hover:text-(--primary) text-[22px] hover:bg-gray-100 rounded-sm py-2 px-3 block hover:tracking-[6px] transition delay-500 duration-700"
                  >
                    Register
                  </Link>
                  <Link
                    to="#"
                    onClick={() => navigate("/register")}
                    className="text-white md:hidden hover:text-(--primary) text-[22px] hover:bg-gray-100 rounded-sm py-2 px-3 hover:tracking-[6px] transition  duration-700"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      
    </>
  );
}
