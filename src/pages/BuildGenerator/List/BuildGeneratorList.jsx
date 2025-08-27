import BuildgeneratorListItem from "./BuildgeneratorListItem";
import RandomPerk from "../../../../public/images/random-perk.webp";
import LazyImage from "../../../Components/UI/LazyImage";
import { motion, AnimatePresence } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const BuildGeneratorList = ({ build }) => {
  return (
    <AnimatePresence mode="wait">
      {!build || build.length === 0 ? (
        <motion.ul
          key="placeholder"
          className="flex justify-center items-center max-md:flex-row flex-wrap"
          variants={listVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {[...Array(4)].map((_, i) => (
            <li key={i} className="w-[150px] max-md:w-[120px]">
              <LazyImage src={RandomPerk} />
            </li>
          ))}
        </motion.ul>
      ) : (
        <motion.ul
          key="build"
          className="flex flex-wrap justify-center items-center gap-2 mb-4"
          variants={listVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {build.map((perk) => (
            <BuildgeneratorListItem key={perk.name} perk={perk} />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default BuildGeneratorList;
