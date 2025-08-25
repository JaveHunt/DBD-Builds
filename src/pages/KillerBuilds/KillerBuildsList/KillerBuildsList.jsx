import KillerBuildsListItem from "./KillerBuildsListItem";

const KillerBuildsList = ({ killer }) => {
  const builds = Object.values(killer.builds);
  return (
    <ul className="flex justify-evenly gap-y-10 flex-wrap">
      {builds.map((build) => (
        <KillerBuildsListItem
          key={build.buildName}
          build={build}
          rating={build.rating}
        />
      ))}
    </ul>
  );
};

export default KillerBuildsList;
