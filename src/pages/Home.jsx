import PageFade from "../components/PageFade";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <PageFade>
      <section className="home">
        <div className="home-container">
          <h1 className="home-title">SAOUTER LOIC{/*<img className="logo2" src="/nom-prenom.png" alt=""/>*/}</h1> 
          <h2 className="home-subtitle">Développeur Web & Technicien Réseau</h2>
          <p className="home-description">
            Passionné par l'informatique, je conçois des sites web modernes, je
            maintiens des infrastructures réseau. Découvrez mes projets et mon parcours !
          </p>
          <div className="home-buttons">
            <Link to="/projects" className="btn btn-outline">
              Voir mes projets
            </Link>
            <Link to="/about" className="btn btn-outline">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </PageFade>
  );
}

export default Home;
