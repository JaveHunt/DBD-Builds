import LazyImage from "../../../Components/UI/LazyImage";

const KillerListItem = ({ name, portrait, portraitAlt }) => {
  return (
    <div>
      <figure className="relative w-fit">
        <LazyImage
          src={portrait}
          alt={portraitAlt}
          className="w-[285px] h-auto"
        />
        <figcaption
          style={{
            backgroundImage: "url('/images/killerbtnbg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.85,
          }}
          className="shadow-2xs text-center text-wrap max-w-[230px] w-fit px-[20px] py-2 leading-[20px] text-2xl font-normal absolute bottom-3 right-4.5 rounded-tl-[16px]"
        >
          {name}
        </figcaption>
      </figure>
    </div>
  );
};

export default KillerListItem;
