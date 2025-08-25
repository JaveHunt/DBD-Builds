import React from "react";

const BuildsTitle = () => {
  return (
    <div
      className="
        flex items-center my-6 w-full gap-4 
        lg:justify-start     
        max-lg:justify-center
      "
    >
      <div className="bg-red-700 h-[2px]  w-full" />

      <h2 className="text-[2rem] font-semibold whitespace-nowrap :text-center">
        Builds
      </h2>

      <div className="bg-red-700 h-[2px]  w-full" />
    </div>
  );
};

export default BuildsTitle;
