// ui
import SearchBar from "../ui/SearchBar";
// icons
import arrow from "../../assets/icons/down-arrow.svg";
const DesktopMenu = ({
  menuData,
  isSearchOpen,
  setIsSearchOpen,
  showDropdownMenu,
  handleShowMenu,
}) => {
  return (
    <div className="hidden md:flex gap-10 bg-white md:items-baseline md:h-auto md:flex-row md:w-auto pt-0 mx-20">
      <ul className="flex flex-col justify-center items-center gap-4 w-full sm:flex sm:flex-row sm:items-center sm:gap-10">
        {menuData?.map(({ id, name, href, isDropdown, dropdown }) => (
          <li
            key={id}
            className="cursor-pointer text-xl relative w-full text-center sm:w-auto border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black"
            onClick={() => handleShowMenu(isDropdown)}
          >
            <a href={href} className="flex justify-center font-inter">
              {isDropdown ? (
                <>
                  <span className="mr-2">{name}</span>
                  <img src={arrow} alt="down arrow" />
                </>
              ) : (
                name
              )}
            </a>

            {isDropdown && showDropdownMenu && (
              <ul className="hidden absolute -left-20 md:flex flex-col items-center gap-3 w-screen bg-white shadow-md p-4 max-w-60 mt-4 ">
                {dropdown?.map(({ id, name }) => (
                  <li
                    key={id}
                    className="cursor-pointer text-lg text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black"
                  >
                    <a href={href}>{name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
    </div>
  );
};

export default DesktopMenu;
