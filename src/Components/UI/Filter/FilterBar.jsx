import FilterButton from "./FilterButton";

const filters = ["All", "Killers", "Survivors"];

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-center">
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          label={filter}
          isActive={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
          bgImage="/images/killerbtnbg.webp"
        />
      ))}
    </div>
  );
};

export default FilterBar;
