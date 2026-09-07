import { motion } from "framer-motion";
// ui
import SearchBar from "../ui/SearchBar";
// animations
import { fadeMenuItems, slideMenu } from "../../motionVariants";

const MobileMobile = ({
  menuData,
  arrow,
  isOpen,
  isSearchOpen,
  setIsOpen,
  showDropdownMenu,
  handleShowMenu,
}) => {
  return (
    <motion.div
      className="flex items-center justify-center flex-col fixed top-0 bottom-0 left-0 h-dvh w-full z-4 bg-white md:hidden"
      variants={slideMenu}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
    >
      <ul className="flex flex-col justify-center items-center gap-4">
        {menuData?.map(({ id, name, href, isDropdown, dropdown }) => (
          <motion.li
            key={id}
            className="cursor-pointer relative text-2xl text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black"
            variants={fadeMenuItems}
            onClick={() => {
              handleShowMenu(isDropdown, href);
            }}
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
              <ul className="absolute top-full flex flex-col items-center gap-3 w-screen bg-white z-10 shadow-md p-4 max-w-65 mt-4 -left-20">
                {dropdown?.map(({ id, name }) => (
                  <li
                    key={id}
                    className="cursor-pointer text-lg text-center border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-black"
                    onClick={() => setIsOpen(false)}
                  >
                    <a href="#">{name}</a>
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
        ))}
      </ul>

      <motion.div className="flex justify-center mt-5 sm:flex-row-reverse" variants={fadeMenuItems}>
        <SearchBar isSearchOpen={isSearchOpen} />
      </motion.div>
    </motion.div>
  );
};

export default MobileMobile;
