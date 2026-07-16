import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Navlinks } from "../constants/navlink";

function Navbar() {
  const [open, setOpen] = useState(false);
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
    <nav className="fixed  top-0 w-full  bg-green-500 text-amber-300 p-4">
      <div className="w-full flex items-center justify-between font-bold">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="logo.png" alt="logo" className="w-10 h-10" />
          <h1>SEEEWANI</h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden top-20 md:flex gap-6 items-center">
          {Navlinks.map((link, index) => (
            <li key={index}>
              <Link  to={link.path}  onClick={() => {
    scrollTop();
    setOpen(false);
  }}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-3 mt-4 md:hidden">
          {Navlinks.map((link, index) => (
            <li key={index}>
                 <Link  to={link.path}  onClick={() => {
    scrollTop();
    setOpen(false);
  }}>{link.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;