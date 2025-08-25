import KillerListItem from "./KillerListItem.jsx";
import { killerData } from "../../../data/Killers/killerData.js";
import { Link } from "react-router-dom";

const KillerList = ({ searchTerm }) => {
  const filteredKillers = killerData.filter((killer) =>
    killer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mt-5">
      <ul className="flex flex-col justify-center items-center gap-4.5 md:flex-row flex-wrap ">
        {filteredKillers.length === 0 ? (
          <p className="text-center text-gray-400 text-4xl">No killers found</p>
        ) : (
          filteredKillers.map((item) => (
            <li key={item.id}>
              <Link to={`/killer-builds/${item.shortName}`}>
                <KillerListItem
                  name={item.name}
                  portrait={item.portrait}
                  portraitAlt={item.portraitAlt}
                  link={item.link}
                />
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default KillerList;
