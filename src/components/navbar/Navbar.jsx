// icons
import { useState } from "react";
import hambugerClosed from "../../assets/icons/close-hamburger-menu.svg";
import arrow from "../../assets/icons/down-arrow.svg";
import hambugerOpen from "../../assets/icons/hamburger-menu.svg";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
// ui
import DesktopMenu from "./DesktopMenu";
import MobileMobile from "./MobileMenu";
// data
import { menuData } from "../../data/menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleShowMenu = (isDropdown, href) => {
    if (isDropdown) setShowDropdownMenu((prev) => !prev);
    if (href !== "#offer") setIsOpen(false);
  };
  return (
    <nav className="fixed top-0 flex justify-between items-center bg-white w-full p-5 z-5 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <a href="#" className="w-30 z-5">
        <img src={logo} alt="logo" className="w-max" />
      </a>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="z-5 md:hidden w-10 cursor-pointer"
      >
        <img src={!isOpen ? hambugerOpen : hambugerClosed} alt="logo" />
      </button>

      <MobileMobile
        menuData={menuData}
        isOpen={isOpen}
        search={search}
        arrow={arrow}
        isSearchOpen={isSearchOpen}
        setIsOpen={setIsOpen}
        showDropdownMenu={showDropdownMenu}
        setShowDropdownMenu={setShowDropdownMenu}
        handleShowMenu={handleShowMenu}
      />
      <DesktopMenu
        menuData={menuData}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        showDropdownMenu={showDropdownMenu}
        setShowDropdownMenu={setShowDropdownMenu}
        handleShowMenu={handleShowMenu}
      />
    </nav>
  );
};

export default Navbar;
