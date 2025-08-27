import { useState } from "react";
import BuildRoleButton from "../../Components/UI/BuildRoleButton";
import killerbtnbg from "/images/killerbtnbg.webp";
import graybtn from "/images/graybtn.webp";
import BuildGeneratorList from "./List/BuildGeneratorList";

import IconHelpLoading_killer from "/images/Icons/IconHelpLoading_killer.webp";
import IconHelpLoading_survivor from "/images/Icons/IconHelpLoading_survivor.webp";
import ContentWrapper from "../../Components/Layout/ContentWrapper";

import perks from "../../data/perks.json";

const BuildGeneratorContainer = () => {
  const [build, setBuild] = useState([]);

  const generateBuild = (role) => {
    const rolePerks = Object.values(perks).filter((perk) => perk.role === role);
    const randomBuild = rolePerks.sort(() => Math.random() - 0.5).slice(0, 4);
    setBuild(randomBuild);
  };

  return (
    <ContentWrapper>
      <div className="lg:w-[800px] flex gap-6 flex-col m-auto bg-[#252525] bg-opacity-60 p-5 max-md:p-3 rounded-2xl shadow">
        <h2 className="text-center text-2xl uppercase font-semibold">
          Generate a Build
        </h2>
        <BuildGeneratorList build={build} />
        <div className="flex justify-center items-center gap-3">
          <BuildRoleButton
            label="KILLER"
            bgImage={killerbtnbg}
            icon={IconHelpLoading_killer}
            onClick={() => generateBuild("killer")}
          />
          <BuildRoleButton
            label="SURVIVOR"
            bgImage={graybtn}
            icon={IconHelpLoading_survivor}
            onClick={() => generateBuild("survivor")}
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default BuildGeneratorContainer;
