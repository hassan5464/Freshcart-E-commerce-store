import React from "react";
import { Link } from "react-router-dom";
import footerimg from "/deepseek.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-(--footer-color) mx-auto text-gray-500  min-h-[500px]  ">
        <div className="container flex flex-col justify-around  ">
          <div className="flex justify-between pt-14 pb-8  border-b-gray-500 border-b-[1px]">
            <Link to="/" className="">
              <img
                src={footerimg}
                className="md:h-10 h-8 text-white "
                alt="Fresh cart Logo"
              />
            </Link>
            <ul className="flex items-center space-x-3">
              <li className="text-[20px] hover:text-(--primary)">
                <Link>
                  <i class="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li className="text-[20px]  hover:text-(--primary)">
                <Link>
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li className="text-[20px]  hover:text-(--primary)">
                <Link>
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-8  border-b-gray-500 border-b-[1px]">
            <div>
              <h3 className="font-bold mb-4 text-[18px] text-white">
                Categories
              </h3>
              <ul className="space-y-2 ">
                <li className="hover:text-(--primary)">
                  <Link>Vegetables & Fruits</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Dairy, bread & eggs</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Breakfast & instant food</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Cold drinks & juices</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Bakery & Biscuits</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Tea, coffee & drinks</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Atta, rice & dal</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Masala, oil & more</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Sauces & spreads</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4  text-(--footer-color)"> d</h3>
              <ul>
                <li className="hover:text-(--primary)">
                  <Link>Chicken, meat & fish</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Organic & gourmet</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Paan corner</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Baby care</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Pharma & wellness</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Cleaning essentials</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Home & officev</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Personal care</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Pet care</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4  text-white">Get to know us</h3>
              <ul className="space-y-2">
                <li className="hover:text-(--primary)">
                  <Link>Company</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>About</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Blog</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Help Center</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Promos & Coupons</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4  text-white">For Consumers</h3>
              <ul className="space-y-2">
                <li className="hover:text-(--primary)">
                  <Link>Payments</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Shipping</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Product Returns</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>FAQ</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Shop Checkout</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4  text-white">Freshcart Programs</h3>
              <ul className="space-y-2">
                <li className="hover:text-(--primary)">
                  <Link>Shop Checkout</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Shopper Opportunities</Link>
                </li>
                <li className="hover:text-(--primary)">
                  <Link>Gift Cards</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-6">
            <p>
              © 2022 - 2025 FreshCart eCommerce HTML Template. All rights
              reserved. <br />
              Powered by{" "}
              <span className="text-(--primary)"> Codescandy . </span>{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
