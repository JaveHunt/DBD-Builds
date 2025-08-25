import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import KillerBuilds from "../pages/KillerBuilds/KillerBuilds";
import SurvivorBuilds from "../pages/SurvivorBuilds/SurvivorBuilds";
import BuildGenerator from "../pages/BuildGenerator/BuildGenerator";
import KillerBuildsDetails from "../pages/KillerBuilds/KillerBuildsDetails";
import { AnimatePresence } from "framer-motion";
import SurvivorBuildsInnerPage from "../pages/SurvivorBuilds/SurvivorBuildsInnerPage";
const AppRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/killer-builds" element={<KillerBuilds />}></Route>
        <Route path="/survivor-builds" element={<SurvivorBuilds />}></Route>
        <Route path="/build-generator" element={<BuildGenerator />}></Route>
        <Route
          path="/killer-builds/:id"
          element={<KillerBuildsDetails />}
        ></Route>
        <Route
          path="/survivor-builds/:id"
          element={<SurvivorBuildsInnerPage />}
        ></Route>
        <Route path="/killer/:id" element={<KillerBuildsDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
