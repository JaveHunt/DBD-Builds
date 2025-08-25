import { useState, useEffect } from "react";
import SearchInput from "../../Components/UI/SearchInput";
import KillerList from "./KillerLists/KillerList";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import ContentWrapper from "../../Components/Layout/ContentWrapper";
import PageTitle from "../../Components/UI/PageTitle";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const KillerBuilds = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      const cleaned = inputValue.trim().replace(/\s+/g, " ");
      setSearchTerm(cleaned);
      setIsLoading(false);
    }, 350);

    return () => clearTimeout(handler);
  }, [inputValue]);

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
          <PageTitle title="Killer Builds" />
          <div className="flex flex-col justify-center items-center mb-8 w-full">
            <h3 className="text-center text-4xl font-semibold mb-2">
              Choose your Killer
            </h3>

            <div className="flex flex-col justify-center items-center gap-4 w-full max-w-md ">
              <SearchInput
                searchTerm={inputValue}
                setSearchTerm={setInputValue}
              />
              {isLoading && (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=" w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"
                />
              )}
            </div>

            <AnimatePresence>
              {!isLoading && (
                <motion.div
                  key="killer-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <KillerList searchTerm={searchTerm} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </motion.div>
  );
};

export default KillerBuilds;
