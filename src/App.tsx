import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/Styles/CSS/App.css";
import Menu from "./Components/Menu";
import AboutPage from "./Pages/AboutPage";
import CGIPage from "./Pages/CGIPage";
import ContactPage from "./Pages/ContactPage";
import DetailsPage from "./Pages/DetailsPage";
import GraphicsPage from "./Pages/GraphicsPage";
import IndustrialDesignPage from "./Pages/IndustrialDesignPage";
import OverviewPage from "./Pages/OverviewPage";

function App(): JSX.Element {
  return (
    <div>
      {/* <GlobalState> */}

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/industrial-design" element={<IndustrialDesignPage />} />
          <Route path="/CGI" element={<CGIPage />} />
          <Route path="/graphics" element={<GraphicsPage />} />
          <Route path="/project/:project" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
      {/* </GlobalState> */}
    </div>
  );
}

export default App;
