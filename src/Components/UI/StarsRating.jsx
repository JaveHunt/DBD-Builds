const Star = () => <img className="w-5" src="/images/Icons/star.svg"></img>;
const StarsRating = ({ count = 0 }) => (
  <div className="flex ">
    {Array.from({ length: count }, (_, i) => (
      <Star key={i} />
    ))}
  </div>
);

export default StarsRating;
