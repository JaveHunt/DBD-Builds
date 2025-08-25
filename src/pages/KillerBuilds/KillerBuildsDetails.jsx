import ContentWrapper from "../../Components/Layout/ContentWrapper";
import Header from "../../Components/Layout/Header/Header";
import PageTitle from "../../Components/UI/PageTitle";
import { useParams } from "react-router-dom";
import { killerData } from "../../data/Killers/killerData";
import Footer from "../../Components/Layout/Footer/Footer";
import BuildsTitle from "../../Components/UI/BuildsTitle";
import KillerBuildsHeaderBlock from "./KillerBuildsHeaderBlock";
import KillerBuildsList from "./KillerBuildsList/KillerBuildsList";
import { motion } from "framer-motion";
import PreviousTab from "../../Components/UI/PreviousTab";
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const KillerBuildsDetails = () => {
  const { id } = useParams();
  const killer = killerData.find((k) => k.shortName === id);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full w-full"
    >
      <ContentWrapper>
        <Header />
        <main className="mb-8">
          <PageTitle title={killer.name} />
          <PreviousTab link={"/killer-builds"} />
          <KillerBuildsHeaderBlock killerData={killer} />
          <BuildsTitle />
          <KillerBuildsList killer={killer} />
        </main>
      </ContentWrapper>
      <Footer />
    </motion.div>
  );
};

export default KillerBuildsDetails;
