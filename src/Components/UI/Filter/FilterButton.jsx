const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-0.5 rounded-sm  transition text-[20px] cursor-pointer
        ${isActive ? " text-white bg-red-700" : " text-black bg-gray-600   "}
      `}
    >
      {label}
    </button>
  );
};

export default FilterButton;
