import { Link } from "react-router-dom";

const RoleButton = ({ bgImage, label, icon, className = "", link }) => {
  return (
    <Link
      to={link}
      className={`hover:opacity-80 transition-all ease-in-out flex lg:justify-center items-center gap-1.5 rounded-sm px-2.5 py-[4.5px] bg-no-repeat bg-center bg-cover ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {icon && <img className="w-[28px]" src={icon} alt="icon" />}
      <p className="text-[18px]">{label}</p>
    </Link>
  );
};

export default RoleButton;
