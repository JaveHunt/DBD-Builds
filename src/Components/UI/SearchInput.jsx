const SearchInput = ({ searchTerm, setSearchTerm }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.blur();
      }, 100);
    }
  };

  return (
    <div
      style={{
        borderImage: "url('/images/killerbtnbg.webp')",
        borderImageSlice: 12,
      }}
      className="w-[288px] flex items-center border-2 sm:w-[350px] my-6"
    >
      <input
        id="searchInput"
        type="text"
        placeholder="Search for a killer..."
        className="flex-grow bg-transparent text-white placeholder-[18px] px-4 py-2 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <label htmlFor="searchInput" className="cursor-pointer">
        <div className="px-4 py-2 opacity-70">
          <img
            className="w-[24px]"
            src="/images/Icons/search.svg"
            alt="Search Icon"
          />
        </div>
      </label>
    </div>
  );
};

export default SearchInput;
