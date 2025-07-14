import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import regImg from "../images/fp-g.svg";
import axios from "axios";
import TextPressure from "./TextPressure";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [clicked , setIsClicked] = useState(false);
  const navigate = useNavigate();

  async function register(values) {
    try {
      setIsClicked(true)
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );

      navigate("/")
      setIsClicked(false);

    } catch (error) {
      setErrorMessage(error.response.data.message);
      setIsClicked(false);
      setTimeout(()=>{
        setErrorMessage(null);
      },3000)
    }
  }

  const regForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .max(15, "Name must be at most 15 characters"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(15, "Password must be at most 15 characters")
        .matches(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{5,15}$/,
          "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 6-15 characters long."
        ),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password")], "RePassword must match Password")
        .required("RePassword is required"),
      phone: Yup.string()
        .required("EGY Phone is required")
        .matches(
          /^01[015][0-9]{8}$/,
          "Phone must be a valid EGY phone number"
        ),
    }),

    onSubmit: register,
  });

  // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{5,15}$/

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-around  py-24 my-4 ">
        <h2 className="block mb-6 py-4 md:hidden text-center w-56  mx-auto  rounded-sm bg-[#001e2b] transition duration-150">
          {" "}
          <TextPressure
            text="Register"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#39BD39"
            minFontSize={22}
          />
        </h2>

        <div className="">
          <img src={regImg} />
        </div>

        <div className="w-1/2">
          <h2 className=" mb-6 py-4 text-center w-64  mx-auto hidden md:block  rounded-sm bg-[#001e2b] transition duration-150">
            <TextPressure
              text="Register"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#39BD39"
              minFontSize={22}
            />
          </h2>
          <form className="max-w-md mx-auto" onSubmit={regForm.handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-(--footer-color)"
              >
                Your name
              </label>
              <input
                type="text"
                onBlur={regForm.handleBlur}
                defaultValue={regForm.values.name}
                onChange={regForm.handleChange}
                id="name"
                className="border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5   focus:outline-[4px] focus:outline-(--secondary) bg-white placeholder:text-gray-400  "
                placeholder="Mohamed"
                required
              />
              {regForm.errors.name && regForm.touched.name ? (
                <div
                  className="p-4 mb-4 text-sm text-red-600 rounded-lg  bg-(--footer-color)"
                  role="alert"
                >
                  {regForm.errors.name}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-(--footer-color)"
              >
                Your email
              </label>
              <input
                type="email"
                defaultValue={regForm.values.email}
                onBlur={regForm.handleBlur}
                onChange={regForm.handleChange}
                id="email"
                className="border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5   focus:outline-[4px] focus:outline-(--secondary) bg-white placeholder:text-gray-400  "
                placeholder="name@gmail.com"
                required
              />
              {regForm.errors.email && regForm.touched.email ? (
                <div
                  className="p-4 mb-4 text-sm text-red-600 rounded-lg  bg-(--footer-color)"
                  role="alert"
                >
                  {regForm.errors.email}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-(--footer-color)"
              >
                Your password
              </label>
              <input
                type="password"
                defaultValue={regForm.values.password}
                onBlur={regForm.handleBlur}
                onChange={regForm.handleChange}
                id="password"
                className="border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5   focus:outline-[4px] focus:outline-(--secondary) bg-white placeholder:text-gray-400  "
                placeholder="*******"
                required
              />
              {regForm.errors.password && regForm.touched.password ? (
                <div
                  className="p-4 mb-4 text-sm text-red-600 rounded-lg  bg-(--footer-color)"
                  role="alert"
                >
                  {regForm.errors.password}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="rePassword"
                className="block mb-2 text-sm font-medium text-(--footer-color)"
              >
                rePassword
              </label>
              <input
                type="password"
                defaultValue={regForm.values.rePassword}
                onBlur={regForm.handleBlur}
                onChange={regForm.handleChange}
                id="rePassword"
                className="border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5   focus:outline-[4px] focus:outline-(--secondary) bg-white placeholder:text-gray-400  "
                placeholder="*******"
                required
              />
              {regForm.errors.rePassword && regForm.touched.rePassword ? (
                <div
                  className="p-4 mb-4 text-sm text-red-600 rounded-lg  bg-(--footer-color)"
                  role="alert"
                >
                  {regForm.errors.rePassword}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-(--footer-color)"
              >
                your phone
              </label>
              <input
                type="tel"
                defaultValue={regForm.values.phone}
                onBlur={regForm.handleBlur}
                onChange={regForm.handleChange}
                id="phone"
                className="border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5   focus:outline-[4px] focus:outline-(--secondary) bg-white placeholder:text-gray-400  "
                placeholder="+20"
                required
              />
              {regForm.errors.phone && regForm.touched.phone ? (
                <div
                  className="p-4 mb-4 text-sm text-red-600 rounded-lg  bg-(--footer-color)"
                  role="alert"
                >
                  {regForm.errors.phone}
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="text-white   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center "
            >
              {clicked ? <i class="fa-solid fa-spinner animate-spin"></i> : "Submit"}
            </button>
            {errorMessage &&
            <div
              className="px-5 py-2.5 animate-bounce flex-1 inline-flex text-sm text-red-600 rounded-lg  bg-(--footer-color)"
              role="alert"
            > <i className="fa-solid fa-xmark text-red-500  pt-1 pr-1"></i>
              {errorMessage}
            </div>
}
          </form>
        </div>
      </div>
    </>
  );
}
