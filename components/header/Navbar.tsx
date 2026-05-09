"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const openMobileNavHandler = () => setMobileNav(true);
  const closeMobileNavHandler = () => setMobileNav(false);
  return (
    <div>
      <Nav openMobileNav={openMobileNavHandler} />
      <MobileNav mobileNav={mobileNav} closeMobileNav={closeMobileNavHandler} />
    </div>
  );
};

export default Navbar;
