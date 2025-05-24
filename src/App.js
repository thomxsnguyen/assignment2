import React, { useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./Home.js";
import NamFam from "./NamFam.js";
import Ocsa from "./Ocsa.js";
import TheBums from "./TheBums.js";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/namfam" element={<NamFam />} />
        <Route path="/hometown" element={<Ocsa />} />
        <Route path="/thebums" element={<TheBums />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
