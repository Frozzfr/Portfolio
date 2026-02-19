import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img className="logo" src="/favicon.png" alt="" />
        </Link>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Accueil
          </Link>
          <Link to="/about" onClick={closeMenu}>
            À propos
          </Link>
          <Link to="/projects" className="bubble-btn" onClick={closeMenu}>
            Projets
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <div className="navbar-theme">
            <ThemeToggle />

          </div>
          {<div className="navbar-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>}
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
