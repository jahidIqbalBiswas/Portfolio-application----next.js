import { navLinks } from "@/constants/constant";
import { X } from "lucide-react";
import Link from "next/link";
import Logo from "./../helpers/Logo";

const MobileNav = ({ mobileNav, closeMobileNav }) => {
  const sidebarOpenClose = mobileNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div
        onClick={closeMobileNav}
        className={`${sidebarOpenClose} fixed inset-0 transform transition-all duration-500 z-1002 bg-black/20 backdrop-blur w-full h-screen`}
      ></div>

      {/* navlinks */}
      <div
        className={` ${sidebarOpenClose} text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(180,245,200,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] dark:bg-[radial-gradient(circle_farthest-corner_at_50%_50%,rgba(10,50,45,1)_0%,rgba(5,10,10,1)_100%)] space-y-6 z-1050 shadow-lg`}
      >
        {navLinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <p className="text-black dark:text-white w-fit text-[20px] font-light ml-12 border-b-[1.5px] pb-1 border-green-500 sm:text-[30px]">
                {link.name}
              </p>
            </Link>
          );
        })}
        {/* CLose icon */}
        <div className="absolute top-7.5 left-0 p-6 flex justify-between w-full">
          <Logo />
          <X
            onClick={closeMobileNav}
            className="w-10 h-10 text-green-500 hover:text-red-500 p-1 cursor-pointer rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
