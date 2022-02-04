import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Assets/Styles/CSS/App.css";
import Menu from "./Components/Menu";
import GlobalState from "./Context/GlobalState";
import AboutPage from "./Pages/AboutPage";
import CGIPage from "./Pages/CGIPage";
import ContactPage from "./Pages/ContactPage";
import DetailsPage from "./Pages/DetailsPage";
import GraphicsPage from "./Pages/GraphicsPage";
import IndustrialDesignPage from "./Pages/IndustrialDesignPage";
import GeneralPage from "./Pages/GeneralPage";

function App(): JSX.Element {
  return (
    <div>
      <GlobalState>
        <Menu />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<GeneralPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industrialDesign" element={<IndustrialDesignPage />} />
            <Route path="/CGI" element={<CGIPage />} />
            <Route path="/graphics" element={<GraphicsPage />} />
            <Route path="/:section/:project" element={<DetailsPage />} />
          </Routes>
        </AnimatePresence>
      </GlobalState>
    </div>
  );
}

export default App;
