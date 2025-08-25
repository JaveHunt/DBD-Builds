import RoleButton from "../../Components/UI/RoleButton";
import killerbtnbg from "/images/killerbtnbg.webp";
import IconHelpLoading_killer from "/images/Icons/IconHelpLoading_killer.webp";
import graybtn from "/images/graybtn.webp";
import IconHelpLoading_survivor from "/images/Icons/IconHelpLoading_survivor.webp";

const RoleButtonGroup = () => {
  return (
    <div className="flex w-full justify-center items-center mb-10 max-[290px]:flex-col max-[290px]:gap-2.5 max-[290px]:text-center gap-2">
      <RoleButton
        className="min-w-[140px] lg:min-w-[180px] "
        label="KILLER"
        bgImage={killerbtnbg}
        icon={IconHelpLoading_killer}
        link="/killer-builds"
      />
      <RoleButton
        className="min-w-[140px] lg:min-w-[180px]"
        label="SURVIVOR"
        bgImage={graybtn}
        icon={IconHelpLoading_survivor}
        link="/survivor-builds"
      />
    </div>
  );
};

export default RoleButtonGroup;
