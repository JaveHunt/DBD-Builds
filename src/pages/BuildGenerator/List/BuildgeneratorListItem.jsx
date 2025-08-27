import { motion } from "framer-motion";
import PerkTooltip from "../../../Components/UI/Tooltip";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const BuildgeneratorListItem = ({ perk }) => {
  return (
    <motion.li className="flex flex-col items-center" variants={itemVariants}>
      <PerkTooltip
        perkImg={perk.image}
        perkName={perk.name}
        perkDescription={perk.description}
        tunables={perk.tunables}
        className="w-[150px] max-md:w-[120px]"
      />

      {/* animated text */}
      <motion.p
        className="text-center text-sm max-md:text-[12px] mt-2"
        variants={itemVariants}
      >
        {perk.name}
      </motion.p>
    </motion.li>
  );
};

export default BuildgeneratorListItem;
