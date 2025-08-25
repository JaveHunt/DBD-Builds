import Header from "../../Components/Layout/Header/Header";
import IntroSection from "./IntroSection";
import backgroundHeader from "/images/background-header.jpeg";

const Wrapper = () => {
  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: `url(${backgroundHeader})`,
        }}
      ></div>

      <div className="relative z-10">
        <Header />
        <div className=" flex flex-col justify-center items-center">
          <IntroSection />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
