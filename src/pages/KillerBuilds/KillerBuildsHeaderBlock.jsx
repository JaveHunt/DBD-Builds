import StarsRating from "../../Components/UI/StarsRating";

const KillerBuildsHeaderBlock = ({ killerData }) => {
  return (
    <div className="flex gap-6 max-lg:flex-col lg:flex-row bg-[#252525] bg-opacity-60 p-5 rounded-2xl">
      <img
        className="w-[288px] h-auto"
        src={killerData.portrait}
        alt={killerData.portraitAlt}
      />
      <div className="flex flex-col gap-6 justify-center">
        <div>
          <h3 className="text-2xl font-semibold flex items-center text-center gap-2">
            Power: <StarsRating count={killerData.power} />
          </h3>
          <h3 className="text-2xl font-semibold flex items-center text-center gap-2">
            Difficulty: <StarsRating count={killerData.difficulty} />
          </h3>
        </div>

        <p>{killerData.description}</p>
      </div>
    </div>
  );
};

export default KillerBuildsHeaderBlock;
