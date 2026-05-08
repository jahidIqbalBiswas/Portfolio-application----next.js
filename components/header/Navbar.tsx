import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div>
      <Nav />
      <MobileNav />
    </div>
  );
};

export default Navbar;
