import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import myLogo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";


export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-my-bg p-3">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-10 ">
          <span className="font-semibold text-xl tracking-tight animate-spin-slow">
            <img
              className="w-16 h-16 rounded-full"
              src={myLogo}
              alt="Michael Juma"
            />
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-1 py-1 border rounded text-white border-white hover:text-white hover:border-white"
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            <IoMdMenu icon='fa fa-bars' className="text-white" />
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <ScrollLink
              to="header"
              smooth={true}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 relative group"
              onClick={closeMenu}
            >
              <span className="cursor-pointer">Home</span>
              <span className="absolute top-6 bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500 opacity-0 group-hover:opacity-100"></span>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 relative group"
              onClick={closeMenu}
            >
              <span className="cursor-pointer">About</span>
              <span className="absolute top-6 bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500 opacity-0 group-hover:opacity-100"></span>
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 relative group"
              onClick={closeMenu}
            >
              <span className="cursor-pointer">Services</span>
              <span className="absolute top-6 bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500 opacity-0 group-hover:opacity-100"></span>
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              smooth={true}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 relative group"
              onClick={closeMenu}
            >
              <span className="cursor-pointer">Portfolio</span>
              <span className="absolute top-6 bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500 opacity-0 group-hover:opacity-100"></span>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 relative group"
              onClick={closeMenu}
            >
              <span className="cursor-pointer">Contact</span>
              <span className="absolute top-6 bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500 opacity-0 group-hover:opacity-100"></span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
