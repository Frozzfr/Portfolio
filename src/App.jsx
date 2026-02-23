import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";

// About nested
import AboutLayout from "./pages/about/AboutLayout";
import Moi from "./pages/about/Moi.jsx";
import Entreprise from "./pages/about/Entreprise";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<Navigate to="moi" replace />} />
          <Route path="moi" element={<Moi />} />
          <Route path="entreprise" element={<Entreprise />} />
        </Route>

        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;