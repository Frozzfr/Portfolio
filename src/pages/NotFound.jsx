import { Link } from 'react-router-dom';
import PageFade from '../components/PageFade';
import './NotFound.css';

function NotFound() {
  return (
    <PageFade>
      <section className="notfound container">
        <h1>404</h1>
        <p>Oups ! Cette page n'existe pas.</p>
        <Link to="/" className="btn">Retour à l'accueil</Link>
      </section>
    </PageFade>
  );
}

export default NotFound;
