import { useParams } from "react-router-dom";
import { survivorData } from "../../data/Survivors/survivorData";
import ContentWrapper from "../../Components/Layout/ContentWrapper";
import Header from "../../Components/Layout/Header/Header";
import PageTitle from "../../Components/UI/PageTitle";
import SurvivorList from "./SurvivorLists/SurvivorList";
import { motion } from "framer-motion";
import PreviousTab from "../../Components/UI/PreviousTab";
import Footer from "../../Components/Layout/Footer/Footer";
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const SurvivorBuildsInnerPage = () => {
  const { id } = useParams();

  const survivor = survivorData.find((s) => s.shortTitle === id);
  if (!survivor) return <p>Survivor not found</p>;

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col min-h-screen"
    >
      <Header />
      <main className="flex-grow">
        <ContentWrapper>
          <PageTitle title={survivor.pageTitle} />
          <PreviousTab link={"/survivor-builds"} />
          <SurvivorList survivor={survivor} />
        </ContentWrapper>
      </main>

      <Footer />
    </motion.div>
  );
};

export default SurvivorBuildsInnerPage;
