import { FiDownload, FiEye } from "react-icons/fi";
import Competences from "./Competences";
import PageFade from "../components/PageFade";
import "./About.css";

function About() {
  return (
    <PageFade>
      <section className="about-container">
        <h1>À propos de moi</h1>

        <div className="about-section">
          <p>
            Je suis <strong>Loïc SAOUTER</strong>, 18 ans, passionné par
            l’informatique et les technologies numériques. Actuellement en{" "}
            <strong>BTS SIO option SLAM</strong> en alternance, je développe mes
            compétences en développement web, cybersécurité, réseaux et
            maintenance informatique.
          </p>
        </div>
        <a
          href="/cv.pdf"
          download="CV_SAOUTER_LOIC.pdf"
          className="btn btn-outline"
        >
          <FiDownload style={{ marginRight: "8px", fontSize: "20px" }} />
          Télécharger mon CV /
        </a>

        <div className="about-section">
          <div className="about-values">
            <h2>Mes valeurs</h2>
            <div className="values-grid">
              <div className="value-card">
                <span className="value-icon">🧠</span>
                <h3>Curiosité</h3>
                <p>
                  Je me forme en continu sur les nouvelles technologies et
                  langages.
                </p>
              </div>
              <div className="value-card">
                <span className="value-icon">🛠️</span>
                <h3>Rigueur</h3>
                <p>
                  Je m'applique à produire un code propre, structuré et
                  documenté.
                </p>
              </div>
              <div className="value-card">
                <span className="value-icon">🚀</span>
                <h3>Autonomie</h3>
                <p>
                  Je sais travailler seul, résoudre des problèmes et
                  m'auto-former.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Competences />

        <div className="timeline-container">
          <h2>Mon parcours</h2>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>2021 - 2024</h3>
                <p>Bac Pro Systèmes Numériques – Lycée Arthur Rimbaud</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>2024 - 2026</h3>
                <p>BTS SIO SLAM en alternance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Ce que je recherche</h2>
          <p>
            Je suis à la recherche d’une opportunité d'
            <strong> alternance </strong> afin de réaliser la suite de ma
            formation en liscence professionnelle ( 2026 / 2027 ). Je suis
            particulièrement intéressé par les postes de{" "}
            <strong>développeur</strong> ainsi que par les missions de{" "}
            <strong>technicien</strong>
            <strong> systèmes et réseaux</strong>. Je suis ouvert à toutes les
            propositions dans les domaines de la
            <strong> maintenance informatique</strong> ou bien en{" "}
            <strong>développement web</strong> ou encore de la{" "}
            <strong>cybersécurité</strong>. Mon objectif est de continuer à
            apprendre et contribuer à des projets concrets dans un environnement
            motivant et stimulant.
          </p>
        </div>
      </section>
    </PageFade>
  );
}

export default About;
