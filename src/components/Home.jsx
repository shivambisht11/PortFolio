import React from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { TbBrandKotlin } from "react-icons/tb";
import { SiJetpackcompose } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          {/* left */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quas aut repudiandae ipsum aliquid quia error
              excepturi. Quis quas enim, incidunt beatae eligendi expedita
              quibusdam consequuntur iste dolorum doloremque neque?
            </p>
            <br />
            <div className="flex items-center flex-col md:flex-row justify-between space-y-6 md:space-y-0">
              {/* Social Media icon */}
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/samy.b001"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/shivam-singh-bisht-390baa244/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@oycoder" target="_blank">
                      <FaYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/@shivubishtt" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Curremtly working icon */}
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <TbBrandKotlin className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiJetpackcompose className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiAndroidstudio className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <IoLogoFirebase className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="md:w-1/2 md:ml-48 md:mt-16 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[440px] md:h-[440px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
