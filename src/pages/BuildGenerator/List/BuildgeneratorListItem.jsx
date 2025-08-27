import PerkTooltip from "../../../Components/UI/Tooltip";

const BuildgeneratorListItem = ({ perk }) => {
  return (
    <li className="w-[170px] max-lg:w-[120px] flex flex-col items-center">
      <PerkTooltip
        perkImg={perk.image}
        perkName={perk.name}
        perkDescription={perk.description}
        tunables={perk.tunables}
      />
      <p className="text-center text-sm mt-2">{perk.name}</p>
    </li>
  );
};

export default BuildgeneratorListItem;
