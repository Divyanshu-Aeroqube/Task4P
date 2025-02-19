import React from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
<nav className="w-full h-[5.5rem] shadow-sm py-1.5 flex items-center bg-bgcolor">
  <div className="w-[80%] mx-auto flex justify-between items-center h-full">
  <Link to="/">
  <img
    className="h-[1rem] w-[8rem] sm:h-[1.5rem] sm:w-[9rem] md:h-[2.413rem] md:w-[12.8rem] cursor-pointer"
    src={logo}
    alt="VillaCrest"
  />
</Link>
    <div className="sm:hidden ml-auto flex items-center">☰</div>
    <div className="hidden sm:flex gap-1 justify-between md:gap-3 lg:gap-10 items-center text-wrap">
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/villas", label: "Villas" },
        { to: "/services", label: "Services" },
        { to: "/partner", label: "Partner with us" },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `text-[0.85rem] font-semibold text-mulish transition-colors duration-300 ${
              isActive
                ? "text-[#6d87cb] font-bold"
                : "text-navitomcolor hover:text-[#6d87cb]"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
      <div className="bg-btcolor py-[0.6rem] px-[1.9rem] text-[0.85rem] h-[1rem] w-[5rem] md:h-[2.65rem] w-[7.06rem] text-mulish font-bold text-white text-center flex items-center justify-center">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
