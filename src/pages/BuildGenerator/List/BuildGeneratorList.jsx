import BuildgeneratorListItem from "./BuildgeneratorListItem";

const BuildGeneratorList = ({ build }) => {
  if (!build || build.length === 0) return null;

  return (
    <ul className="flex flex-wrap justify-center items-center gap-2 mb-4">
      {build.map((perk) => (
        <BuildgeneratorListItem key={perk.name} perk={perk} />
      ))}
    </ul>
  );
};

export default BuildGeneratorList;
