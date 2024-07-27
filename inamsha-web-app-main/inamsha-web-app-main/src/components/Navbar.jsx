import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logoImage from "../assets/Inamsha-logo.png"; 
import "../index.css";

const Nav = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = click ? "hidden" : "auto";
  }, [click]);

  const handleClick = () => {
    setClick(!click);
  };

  const handleItemClick = () => {
    if (click) {
      setClick(false);
    }
  };

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/about", name: "About" },
    { path: "/gallery", name: "Gallery" },
    { path: "/contact", name: "Contact Us" },
  ];

  return (
    <header className="bg-color shadow sticky z-50 top-0">
      <nav>
        <div className="h-10v flex justify-between z-50 text-white lg:py-5 px-10 py-4 ">
          <div className="flex items-center flex-1">
            <Link to="/" className="flex items-center ml-2">
              <div className="mr-2">
                <img src={logoImage} className="h-16" alt="logo" /> 
              </div>
              <div>
                <span className="text-3xl font-bold">INAMSHA</span>
                <span
                  className={`block text-xs text-gray-300 sm:ml-1 ${click ? 'slide-in' : ''}`}
                >
                  Physiotherapy and rehabilitation centre
                </span>
              </div>
            </Link>
          </div>

          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={handleItemClick}
                      className="hover:text-orange-400 transition border-b-2 border-slate-900 hover:border-orange-400 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:hidden md:hidden flex items-center">
            <button className="block sm:hidden transition" onClick={handleClick}>
              {click ? <FaTimes className="ml-2" /> : <AiOutlineMenu />}
            </button>
          </div>

          <div className={click ? "block fixed inset-0 bg-slate-900 z-50" : "hidden"}>
            <div className="flex justify-end items-center py-4 px-4">
              <button onClick={handleClick} className="text-white">
                <FaTimes />
              </button>
            </div>
            <ul className="text-center text-xl p-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={handleItemClick}
                    className="block my-2 py-2 px-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded lg:hover:text-orange-400 lg:hover:border-orange-400 lg:hover:transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}; 

export default Nav;
