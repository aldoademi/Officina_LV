import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Services from "./components/services";
import Contact from "./components/contact";
import ChiSiamo from "./components/ChiSiamo";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar pageWrapId={'Routes'} outerContainerId={'Router'} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servizi" element={<Services />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
