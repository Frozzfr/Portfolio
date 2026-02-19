import PageFade from '../components/PageFade';
import './MentionsLegales.css';

function MentionsLegales() {
  return (
    <PageFade>
      <section className="mentions container">
        <h1>Mentions légales</h1>
        <p><strong>Éditeur du site :</strong> Loïc Saouter</p>
        <p><strong>Contact :</strong> saouterl@gmail.com</p>

        <h2>Hébergement</h2>
        <p>Le site est hébergé par : (LocalHost)</p>

        <h2>Propriété intellectuelle</h2>
        <p>Tout le contenu de ce site (textes, images, etc.) est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction est interdite sans autorisation.</p>

        <h2>Protection des données</h2>
        <p>Le site ne collecte pas de données personnelles.</p>
      </section>
    </PageFade>
  );
}

export default MentionsLegales;