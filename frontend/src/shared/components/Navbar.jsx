import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ChevronDoubleRightIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <header
      className={
        nav
          ? "bg-primary h-20 text-background font-background fixed top-0 left-0 w-full z-10 md:flex md:justify-center duration-600"
          : "bg-transparent h-20 text-background font-primary fixed top-0 left-0 w-full z-10 md:flex md:justify-center duration-600"
      }
    >
      <nav className="flex justify-between items-center mx-4 my-6 md:w-full md:mx-8 md:max-w-462">
        {nav ? (
          <XMarkIcon onClick={handleNav} className="size-8 left-5 md:hidden" />
        ) : (
          <Bars3Icon onClick={handleNav} className="size-8 left-5 md:hidden" />
        )}

        <ul className="hidden text-xl uppercase gap-5 md:flex">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
        <a
          href="#"
          className=" text-4xl font-medium absolute left-1/2 -translate-x-1/2 link"
        >
          Store
        </a>
        <div className="flex gap-2 md:gap-5">
          <MagnifyingGlassIcon className="size-6  right-5 md:inline icon-link" />
          <UserIcon className="size-6  right-5 md:inline icon-link" />
          <ShoppingBagIcon className="size-6  right-5 icon md:inline icon-link" />
        </div>

        <div
          className={
            nav
              ? "bg-primary w-screen absolute top-20 left-0 h-screen transition-all duration-600"
              : " bg-primary w-screen absolute top-20 -left-full opacity-0  h-screen transition-all duration-600 md:hidden"
          }
        >
          <ul className="flex flex-col mx-4 uppercase gap-5 text-background text-xl">
            <li className="drop-menu-link border-t border-background">
              <Link
                to="/"
                className="flex space justify-between items-center my-4"
              >
                Home
                <ChevronDoubleRightIcon className="size-4" />
              </Link>
            </li>
            <li className="drop-menu-link">
              <Link
                to="/about"
                className="flex space justify-between items-center mb-4"
              >
                About
                <ChevronDoubleRightIcon className="size-4" />
              </Link>
            </li>
            <li className="drop-menu-link">
              <Link
                to="/contact"
                className="flex space justify-between items-center mb-4"
              >
                Contact
                <ChevronDoubleRightIcon className="size-4" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
