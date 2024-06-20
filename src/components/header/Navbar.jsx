import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { Icon } from "@iconify/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { to: "/", label: "خـانه", icon: "material-symbols-light:home-outline" },
    { to: "/services", label: "خدمات", icon: "ri:service-line" },
    { to: "/doctors", label: "داکتـران", icon: "hugeicons:doctor-01" },
    { to: "/contact", label: "ارتباط با ما", icon: "bx:chat" },
  ];

  return (
    <nav className="bg-white px-8 py-4 relative">
      <div className="flex flex-row-reverse justify-between items-center">
        <div className="text-gray-600 text-lg font-bold flex flex-row-reverse items-center gap-x-2">
          <img src={logo} alt="site logo" className="h-10" />
          <div className="flex flex-col ">
            <span className="text-sm text-gray-600">
              شفاخانه تخصصی افغان کاوش
            </span>
            <span className="text-sm text-gray-400 font-light ">
              Afghan Kawesh Hospital
            </span>
          </div>
        </div>
        <button
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul className="hidden md:flex gap-x-8 text-gray-600">
          {navItems.map((item) => (
            <li key={item.to} className="hover:text-orange-500 flex gap-x-2 items-center">
              <Icon icon={item.icon} className="text-lg" />
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 left-4 text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="text-gray-600 text-lg font-bold flex flex-row-reverse items-center gap-x-2 mb-12">
            <img src={logo} alt="site logo" className="h-10" />
            <div className="flex flex-col ">
              <span className="text-xs text-gray-600">
                شفاخانه تخصصی افغان کاوش
              </span>
              <span className="text-xs text-gray-400 font-light ">
                Afghan Kawesh Hospital
              </span>
            </div>
          </div>

          <h2 className="text-2xl mb-8">Menu</h2>
          <ul className="flex flex-col items-center gap-y-4 text-gray-600">
            {navItems.map((item) => (
              <li key={item.to} className="hover:text-orange-500">
                <NavLink to={item.to} onClick={toggleMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
