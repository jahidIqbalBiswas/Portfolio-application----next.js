import { navLinks } from "@/constants/constant";
import Link from "next/link";
import Logo from "../HOC/Logo";

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-100 fixed w-full">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* {Navlinks} */}
        {navLinks.map((navLink) => {
          return (
            <Link
              key={navLink.name}
              href={navLink.href}
              className="dark:text-white text-black hover:text-blue-500 dark:hover:text-blue-200 font-semibold transition-all duration-200"
            >
              {navLink.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Nav;
