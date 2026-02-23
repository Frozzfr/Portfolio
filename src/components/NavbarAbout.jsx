import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./NavbarAbout.css";

function NavbarAbout() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <motion.header
            className="navbar-about"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="navbar-about-container">
                <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/AboutMoi" onClick={closeMenu}>
                        Moi
                    </Link>
                    <Link to="/contact" onClick={closeMenu}>
                        Contact
                    </Link>
                    {<div className="navbar-toggle" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>}
                </nav>
            </div>
        </motion.header>
    );
}

export default NavbarAbout;
