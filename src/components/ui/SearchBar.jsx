import search from "../../assets/icons/search.svg";
const SearchBar = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <div className="flex justify-center mt-5 sm:flex-row-reverse">
      <button
        onClick={() => setIsSearchOpen((prev) => !prev)}
        className="w-5 inline-block cursor-pointer"
        type="submit"
      >
        <img src={search} alt="search" />
      </button>
      <form role="search">
        <input
          className={`block outline-none focus:outline-none text-lg text-left px-4 py-1 border-b-2 border-b-gray-200 focus:border-b-black ${!isSearchOpen ? "sm:opacity-0 sm:max-w-0 sm:border-b-transparent" : "sm:opacity-100 sm:max-w-45 "} sm:transition-all duration-300 ease-in-out`}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
