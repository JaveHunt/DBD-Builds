import Header from "../../Components/Layout/Header/Header";
import PageTitle from "../../Components/UI/PageTitle";
import { survivorData } from "../../data/Survivors/survivorData";
import Footer from "../../Components/Layout/Footer/Footer";
import ContentWrapper from "../../Components/Layout/ContentWrapper";
import { motion } from "framer-motion";
import SurvivorBuildsDetails from "./SurvivorBuildsDetails";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const SurvivorBuilds = () => {
  const survivor = survivorData;

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
          <div className="flex flex-col justify-center items-center">
            <PageTitle title="Survivor Builds" />
            <section>
              <ul className="flex justify-center items-stretch flex-wrap gap-6 mb-8 md:justify-center">
                {survivor.map((survivor) => (
                  <SurvivorBuildsDetails
                    key={survivor.id}
                    survivor={survivor}
                  />
                ))}
              </ul>
            </section>
          </div>
        </ContentWrapper>
      </main>

      <Footer />
    </motion.div>
  );
};

export default SurvivorBuilds;
