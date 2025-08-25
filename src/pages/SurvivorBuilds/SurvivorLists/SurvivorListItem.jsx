import StarsRating from "../../../Components/UI/StarsRating";
import PerkTooltip from "../../../Components/UI/Tooltip";

const SurvivorListItem = ({ survivor }) => {
  const builds = Object.values(survivor.builds);

  return (
    <>
      {builds.map((b, index) => (
        <li
          className="bg-[#252525] bg-opacity-60 p-6 rounded-2xl w-fit max-md:p-4 max-sm:p-3 flex flex-col flex-wrap"
          style={{ listStyle: "none" }}
          key={index}
        >
          <div className="flex items-center gap-2 max-md:flex-col max-md:gap-1 mb-5">
            <h2 className="font-semibold text-2xl max-md:text-[1.25rem]">
              {b.buildName}
            </h2>
            <StarsRating count={b.rating} />
          </div>

          <h3 className="font-semibold text-[1.2rem] mb-2.5">Perks:</h3>
          <ul className="flex justify-evenly gap-y-10 flex-wrap">
            {Object.values(b.perks).map(
              (perk) =>
                perk && (
                  <li key={perk.name}>
                    <PerkTooltip
                      perkImg={perk.image}
                      perkName={perk.name}
                      perkDescription={perk.description}
                      tunables={perk.tunables}
                      level={0}
                    />
                  </li>
                )
            )}
          </ul>
        </li>
      ))}
    </>
  );
};

export default SurvivorListItem;
