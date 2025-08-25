import StarsRating from "../../../Components/UI/StarsRating";
import PerkTooltip from "../../../Components/UI/Tooltip";

const KillerBuildsListItem = ({ build, rating }) => {
  return (
    <li className="bg-[#252525] bg-opacity-60 p-6 rounded-2xl w-fit max-md:p-4 max-sm:p-3">
      <div className="flex items-center gap-2 max-md:flex-col max-md:gap-1 mb-5">
        <h2 className="font-semibold text-2xl max-md:text-[1.25rem]">
          {build.buildName}
        </h2>
        <StarsRating count={rating} />
      </div>

      <h3 className="font-semibold max-md:text-[1rem] text-[1.2rem] mb-2.5">
        Perks:
      </h3>
      <ul className="flex mb-5 justify-center items-center lg:gap-1 list-none flex-wrap gap-2">
        {Object.values(build.perks).map(
          (perk, i) =>
            perk && (
              <li key={i}>
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

      {build.videoUrl && (
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-[1.5rem] mb-2.5">Video:</h3>
          <div className="relative w-full max-w-[430px] aspect-video">
            <iframe
              src={build.videoUrl}
              title="YouTube video player"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </li>
  );
};

export default KillerBuildsListItem;
