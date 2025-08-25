import LazyImage from "../../../Components/UI/LazyImage";
import RoleButton from "../../../Components/UI/RoleButton";
const MainListItem = ({ img, alt, tag, title, description, link }) => {
  return (
    <>
      <li className="bg-[#252525] max-w-2xs rounded-[10px] shadow-2xl flex flex-col">
        <div className="w-full h-[200px] relative">
          <LazyImage
            className="w-full h-full object-cover rounded-tl-[10px] rounded-tr-[10px]"
            src={img}
            alt={alt}
            loading="lazy"
          />
          <div className="absolute top-0 right-0 rounded-tr rounded-bl bg-red-700 px-5 text-[0.875rem] font-semibold">
            {tag}
          </div>
        </div>

        <div className="flex flex-col flex-1 p-2.5">
          <h3 className="mb-2.5 text-3xl font-semibold text-wrap line-clamp-2 ">
            {title}
          </h3>

          <p className="mb-4.5 text-[1.125rem] font-medium leading-5 line-clamp-5 fade-out-mask flex-1">
            {description}
          </p>

          <div className="mt-auto">
            <RoleButton
              className="w-full justify-center"
              label="See More"
              bgImage="/images/killerbtnbg.webp"
              link={link}
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default MainListItem;
