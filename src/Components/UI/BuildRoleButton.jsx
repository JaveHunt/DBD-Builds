const BuildRoleButton = ({ label, onClick, className = "", bgImage, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:opacity-80 transition-all ease-in-out cursor-pointer flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-[4.5px] ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {icon && <img className="w-[28px]" src={icon} alt="icon" />}
      <p className="text-[18px] text-white">{label}</p>
    </button>
  );
};

export default BuildRoleButton;
