import ContentWrapper from "../../Components/Layout/ContentWrapper";
import Footer from "../../Components/Layout/Footer/Footer";
import Header from "../../Components/Layout/Header/Header";
import PageTitle from "../../Components/UI/PageTitle";
import { motion } from "framer-motion";
import buildConstruction from "/images/Icons/underConstruction.svg";
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const BuildGenerator = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col min-h-screen w-full"
    >
      <Header />
      <main className="flex-grow">
        <ContentWrapper>
          <PageTitle title="Build Generator" />
          <div className="flex flex-col justify-center items-center mt-15 gap-4">
            <img src={buildConstruction} className="w-[50px]" />
            <h4 className="text-2xl font-bold text-center uppercase">
              This Page Is Under Construction
            </h4>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BuildGenerator;
