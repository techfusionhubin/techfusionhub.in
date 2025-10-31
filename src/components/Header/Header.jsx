import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import "./Header.css";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#000b1d] border-b border-[#1e7a9a] z-50 flex items-center justify-between px-8 py-2 h-auto shadow-md">
      <Link
        to="/home"
        className="flex items-center gap-4 hover:drop-shadow-[0_0_15px_rgba(249,134,25,0.8)] transition-all duration-300 cursor-pointer group"
      >
        <img
          src={Logo}
          alt="TechFusionHub Logo"
          className="h-12 w-12 object-contain group-hover:drop-shadow-[0_0_10px_rgba(249,134,25,0.6)] transition-all duration-300"
        />
        <span className="text-white text-2xl font-bold tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(249,134,25,0.2)] transition-all duration-300">
          <span className="text-[#f98619] group-hover:drop-shadow-[0_0_12px_rgba(249,134,25,0.2)]">
            TechFusion
          </span>
          Hub
        </span>
      </Link>
      <nav className="flex items-center gap-8 text-white text-lg customnth">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "font-bold text-[#f98619]" : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/announcements"
          className={({ isActive }) =>
            isActive ? "font-bold text-[#f98619]" : undefined
          }
        >
          Announcements
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "font-bold text-[#f98619]" : undefined
          }
        >
          Community
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-[#f98619]" : undefined
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "font-bold text-[#f98619]" : undefined
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
