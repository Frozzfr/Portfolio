import { FaGithub, FaLinkedin, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // ➔ Ajoute l'import framer-motion
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="footer-divider"></div> {/* Petite barre de séparation */}
      <div className="footer-content">
        <p>&copy; {year} Loïc Saouter. Tous droits réservés.</p>
        <div className="footer-links">
          <a
            href="https://www.root-me.org/Frozz-716148"
            target="_blank"
            rel="noopener noreferrer"
            title="Root-Me"
          >
            <FaShieldAlt size={24} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="footer-legal">
          <a href="/mentions-legales">Mentions légales</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
