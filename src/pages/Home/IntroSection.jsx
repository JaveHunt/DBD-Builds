import LazyImage from "../../Components/UI/LazyImage";
import RoleButtonGroup from "./RoleButtonGroup";
import clown from "/images/clown.webp";

const IntroSection = () => {
  return (
    <section className="flex justify-center items-center gap-14 lg:max-w-[845px]   ">
      <div className="hidden lg:block ">
        <LazyImage
          className="h-[360px]"
          src={clown}
          alt="Main Character Image"
        />
      </div>
      <div className="flex flex-col items-center gap-5  max-w-[288px] lg:max-w-[385px]">
        <h1 className=" text-6xl font-semibold leading-[45px] text-center">
          BEST KILLER BUILDS
        </h1>
        <p className="  text-[18px] font-medium leading-[20px] text-white/80 text-center">
          Explore the best killer builds in Dead by Daylight from meta loadouts
          to powerful underrated combos designed to win more trials.
        </p>
        <RoleButtonGroup />
      </div>
    </section>
  );
};

export default IntroSection;
