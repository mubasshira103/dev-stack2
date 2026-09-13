import { useState } from "react";
import logo from "../assets/logo-text.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-[72px] lg:px-6">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* Logo */}
        {/* <a
          href="#home"
          className="flex items-center gap-2 md:static"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet text-[10px] font-extrabold text-white">
            DS
          </span>

          <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-lg font-extrabold text-transparent">
            Dev Stack
          </span>
        </a> */}
        <img src={logo} alt="" />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-pink-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm text-gray-500 transition hover:text-pink-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-500 transition hover:text-pink-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-gray-500 transition hover:text-pink-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-500 transition hover:text-pink-600"
          >
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-gray-600 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet px-4 py-2 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-sm text-gray-600"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="text-sm text-gray-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-sm text-gray-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-sm text-gray-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-sm text-gray-600"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
