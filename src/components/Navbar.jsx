import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      Text: "Home",
    },
    {
      id: 2,
      Text: "About",
    },
    {
      id: 3,
      Text: "Portfolio",
    },
    {
      id: 4,
      Text: "Experiance",
    },
    {
      id: 5,
      Text: "Contacts",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Shiva<span className="text-green-500 text-2xl">m</span>
              <p className="text-sm">App Developer</p>
            </h1>
          </div>

          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, Text }) => (
                <li
                  className="hover:scale-110 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={Text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {Text}
                  </Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, Text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={Text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {Text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
