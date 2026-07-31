import { useState } from "react";
import hambugerClosed from "../../assets/icons/close-hamburger-menu.svg";
import arrow from "../../assets/icons/down-arrow.svg";
import hambugerOpen from "../../assets/icons/hamburger-menu.svg";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center sticky p-5 z-5">
      <a href="#" className="w-30">
        <img src={logo} alt="logo" className="w-max" />
      </a>
      <button onClick={() => setIsOpen((prev) => !prev)} className="md:hidden w-10 cursor-pointer">
        <img src={!isOpen ? hambugerOpen : hambugerClosed} alt="logo" />
      </button>

      <div
        className={`flex flex-col justify-center items-center gap-10 bg-white ${!isOpen ? "hidden" : "block"} absolute top-15 right-0 w-full h-[90svh] pt-6 md:items-baseline md:static md:h-auto md:flex md:flex-row md:w-auto md:pt-0 md:mt-3 md:mx-20`}
      >
        <ul
          className={`flex flex-col justify-center items-center gap-4 w-full sm:flex sm:flex-row sm:items-center sm:gap-10`}
        >
          <li
            onClick={() => setIsDropdownMenu((prev) => !prev)}
            className="cursor-pointer text-xl relative w-full text-center sm:w-auto"
          >
            <a href="#" className="flex justify-center">
              <span className="mr-2">Oferta</span>
              <img src={arrow} alt="down arrow" />
            </a>
            {isDropdownMenu && (
              <ul className="absolute left-0 top-full flex flex-col items-center gap-3 w-screen bg-white z-10 shadow-md p-4 sm:max-w-45 sm:mt-4 sm:-left-10">
                <li className="cursor-pointer max-w-25 text-lg text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black">
                  <a href="#">Oferta 1</a>
                </li>
                <li className="cursor-pointer max-w-25 text-lg text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black">
                  <a href="#">Oferta 3</a>
                </li>
                <li className="cursor-pointer max-w-25 text-lg text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black">
                  <a href="#">Oferta 2</a>
                </li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer text-xl text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black">
            <a href=""></a>O firmie
          </li>
          <li className="cursor-pointer text-xl text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black">
            <a href=""></a>Realizacje
          </li>
          <li className="cursor-pointer text-xl text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black">
            <a href=""></a>Kontakt
          </li>
        </ul>

        <div className="flex justify-center sm:flex-row-reverse">
          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="w-5 inline-block cursor-pointer"
            type="submit"
          >
            <img src={search} alt="search" />
          </button>
          <form role="search">
            <input
              className={`block outline-none focus:outline-none text-lg text-left px-4 py-1 border-b-2 focus:border-b-black ${!isSearchOpen ? "sm:opacity-0 sm:max-w-0 sm:border-b-transparent" : "sm:opacity-100 sm:max-w-45 sm:border-b-gray-200"} sm:transition-all duration-300 ease-in-out`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
