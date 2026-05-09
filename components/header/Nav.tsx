"use client";
import { navLinks } from "@/constants/constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../helpers/Logo";
import ThemeToggler from "./../helpers/ThemeToggler";

const Nav = ({ openMobileNav }) => {
  const [navBG, setNavBG] = useState(false);
  useEffect(() => {
    function handler() {
      if (window.scrollY >= 250) {
        setNavBG(true);
      } else {
        setNavBG(false);
      }
    }
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${navBG ? "dark:bg-gray-900 bg-white shadow-md " : ""} duration-300 h-[10vh] fixed z-100 w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* {Navlinks} */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((navLink) => {
            return (
              <Link
                key={navLink.name}
                href={navLink.href}
                className="dark:text-white text-black hover:text-green-600 dark:hover:text-green-400 font-light transition-all duration-200"
              >
                <p>{navLink.name}</p>
              </Link>
            );
          })}
        </div>
        {/* {Buttons} */}
        <div className="flex items-center space-x-4">
          {/* */}
          <a
            href="#"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-6 py-2 overflow-hidden font-light text-white transition-all duration-300 bg-green-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-green-500 ring-offset-green-400 hover:ring-offset-green-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
          {/* Theme Toggler */}
          <ThemeToggler />
          {/* Mobile Menu */}
          <MenuIcon
            onClick={openMobileNav}
            className="w-8 h-8 text-black dark:text-white lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Nav;
