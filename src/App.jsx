import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";
import OurWork from "./Pages/OurWork";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
