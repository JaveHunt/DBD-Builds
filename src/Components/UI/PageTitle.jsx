const PageTitle = ({ title }) => {
  return (
    <div
      className="
        flex items-center my-6 w-full gap-4 
        lg:justify-start     
        max-lg:justify-center
      "
    >
      <div className="bg-red-700 h-[2px] w-[10%] max-lg:w-[33%]" />

      <h2 className="text-[2rem] font-semibold whitespace-nowrap max-lg:text-center">
        {title}
      </h2>

      <div className="bg-red-700 h-[2px] lg:flex-1 max-lg:w-[33%]" />
    </div>
  );
};

export default PageTitle;
