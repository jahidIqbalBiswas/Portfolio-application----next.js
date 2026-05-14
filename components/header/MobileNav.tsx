import { navLinks } from "@/constants/constant";
import { X } from "lucide-react";
import Link from "next/link";
import Logo from "./../helpers/Logo";
interface MobileNavProps {
  mobileNav: boolean;
  closeMobileNav: () => void;
}
const MobileNav = ({ mobileNav, closeMobileNav }: MobileNavProps) => {
  const sidebarOpenClose = mobileNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div
        onClick={closeMobileNav}
        className={`${sidebarOpenClose} fixed inset-0 transform transition-all duration-500 z-999999 bg-black/10 backdrop-blur w-full h-screen`}
      ></div>

      {/* navlinks */}
      <div
        className={` ${sidebarOpenClose} text-white fixed justify-center flex backdrop-blur-3xl flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] z-9999999 shadow-xl`}
      >
        {navLinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <p className="text-black dark:text-white w-fit text-[20px] font-light ml-12 border-b-[1.5px] pb-1 border-green-700 dark:border-green-500 sm:text-[30px]">
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
            className="w-10 h-10 text-green-600 dark:text-green-500 hover:text-red-500! p-1 cursor-pointer rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
