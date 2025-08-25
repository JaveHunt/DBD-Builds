import FilterBar from "../../UI/Filter/FilterBar";
import MainList from "../../../pages/Home/Cards/MainList";
import { useState } from "react";
import { mainCardsData } from "../../../data/mainCardsData";

const Main = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCards =
    activeFilter === "All"
      ? mainCardsData
      : mainCardsData.filter((card) => card.category.includes(activeFilter));

  return (
    <main className="mt-2.5  mb-7 lg:max-w-[896px] xl:max-w-[1280px] mx-auto">
      <section className="pt-5 flex flex-col justify-center items-center">
        <h2 className="text-left text-4xl font-bold mb-4">Explore the Fog</h2>
        <FilterBar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </section>
      <MainList cards={filteredCards} />
    </main>
  );
};

export default Main;
