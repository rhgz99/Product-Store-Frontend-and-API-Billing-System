import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  ChevronDoubleRightIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { isAuthenticated, signOut } = useUser();

  const navigateAfterSignOut = useNavigate();
  const handleNav = () => setNav(!nav);
  const handleUserMenu = () => setUserMenu(!userMenu);
  const handleSignOut = () => {
    signOut();
    navigateAfterSignOut("/sign-in", { replace: true });
  };

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
        <Link
          to="/"
          className=" text-4xl font-medium absolute left-1/2 -translate-x-1/2 link"
        >
          Store
        </Link>
        <div className="flex gap-8 md:gap-5">
          <div className="relative">
            <UserIcon
              className="size-7  icon-link z-10 "
              onClick={() => handleUserMenu()}
            />
            {isAuthenticated() ? (
              <ul className="absolute w-30 mt-2  left-1/2 lg:left-1/2 -translate-x-1/2  text-center rounded">
                <li
                  onClick={() => handleSignOut()}
                  className={
                    userMenu
                      ? "link relative right-0 duration-500 ease-in-out cursor-pointer"
                      : "pointer-events-none relative right-1/3 opacity-0 duration-500 ease-in-out "
                  }
                >
                  Sign Out
                </li>
              </ul>
            ) : (
              <ul className="absolute w-30 mt-2  left-1/2 lg:left-1/2 -translate-x-1/2  text-center rounded">
                <li>
                  <Link
                    to="/sign-in"
                    className={
                      userMenu
                        ? "link relative right-0 duration-500 ease-in-out"
                        : "pointer-events-none relative right-1/3 opacity-0 duration-500 ease-in-out"
                    }
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign-up"
                    className={
                      userMenu
                        ? "link relative right-0 duration-500 ease-in-out"
                        : "pointer-events-none relative right-4/6 opacity-0 duration-1000 ease-in-out"
                    }
                  >
                    New account
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/cart">
            <ShoppingBagIcon className="size-6  right-5 icon md:inline icon-link" />
          </Link>
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
