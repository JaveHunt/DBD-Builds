import LazyImage from "../../Components/UI/LazyImage";
import RoleButton from "../../Components/UI/RoleButton";

const SurvivorBuildsDetails = ({ survivor }) => {
  return (
    <li className="bg-[#252525] max-w-2xs rounded-[10px] shadow-2xl flex flex-col ">
      <div className="w-full h-[200px] relative">
        <LazyImage
          className="w-full h-full object-cover rounded-tl-[10px] rounded-tr-[10px]"
          src={survivor.img}
          alt={survivor.alt}
        />
      </div>

      <div className="flex flex-col flex-1 p-2.5">
        <h3 className="mb-2.5 text-3xl font-semibold text-wrap line-clamp-2 ">
          {survivor.title}
        </h3>

        <p className="mb-4.5 text-[1.125rem] font-extralight leading-5 line-clamp-5 fade-out-mask flex-1">
          {survivor.description}
        </p>

        <div className="mt-auto">
          <RoleButton
            className="w-full justify-center"
            label="See More"
            bgImage="/images/killerbtnbg.webp"
            link={`/survivor-builds/${survivor.shortTitle}`}
          />
        </div>
      </div>
    </li>
  );
};

export default SurvivorBuildsDetails;
