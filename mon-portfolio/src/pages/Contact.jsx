import PageFade from '../components/PageFade';
import "./Contact.css";

function Contact() {
  return (
    <PageFade>
      <section className="contact container">
        <h1>Me contacter</h1>
        <p>Vous pouvez me contacter directement par mail :</p>
        <ul>
          <li>
            <strong>Email :</strong>{" "}
            <a href="mailto:saouterl@gmail.com">saouterl@gmail.com</a>
          </li>
        </ul>
        <p>Ou retrouvez-moi sur mes projets cybersécurité :</p>
        <ul>
          <li>
            <a
              href="https://www.root-me.org/Frozz-716148"
              target="_blank"
              rel="noopener noreferrer"
            >
              Root-Me Profile
            </a>
          </li>
        </ul>
      </section>
    </PageFade>
  );
}

export default Contact;
