import MainListItem from "./MainListItem";

const MainList = ({ cards }) => {
  return (
    <section>
      <ul className="flex justify-center items-center flex-wrap gap-6 md:justify-center-safe">
        {cards.length === 0 ? (
          <p className="text-center text-gray-500">No results found</p>
        ) : (
          cards.map((item) => (
            <MainListItem
              key={item.id}
              img={item.img}
              alt={item.alt}
              tag={item.tag}
              title={item.title}
              description={item.description}
              category={item.category}
              link={item.link}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export default MainList;
