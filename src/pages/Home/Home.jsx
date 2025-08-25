import Wrapper from "./Wrapper";
import Main from "../../Components/Layout/Main/Main";
import Footer from "../../Components/Layout/Footer/Footer";
import { motion } from "framer-motion";
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full w-full"
    >
      <Wrapper />
      <Main />
      <Footer />
    </motion.div>
  );
};

export default Home;
