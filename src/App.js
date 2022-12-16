import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./composants/navbar/navbar";
import "./App.css";

import LandingPage from "./composants/pages/landingPage/LandingPage";
import Offres from "./composants/pages/offres/offres";
import Programmes from "./composants/pages/programmes/programmes";
import Actuallites from "./composants/pages/actuallites/actuallites";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/LandingPage" element={<LandingPage />}/>
        <Route path="/offres" element={<Offres />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/actuallites" element={<Actuallites />} />
      </Routes>
    </>
  );
}

export default App;
