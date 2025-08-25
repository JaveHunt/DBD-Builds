import SurvivorListItem from "./SurvivorListItem";

const SurvivorList = ({ survivor }) => {
  return (
    <ul className="flex justify-around gap-y-10 flex-wrap mb-12">
      <SurvivorListItem key={survivor.id} survivor={survivor} />
    </ul>
  );
};

export default SurvivorList;
