import "./Moi.css";

export default function Moi() {
    return (
        <section className="about-me">
            <h2 className="about-title">Moi — Profil & présentation</h2>
            <p className="about-subtitle">
                Tout ce qu’il faut pour me comprendre en 30 secondes.
            </p>

            <div className="about-card">

                <p className="about-hook">
                    Développeur web en formation (BTS SIO SLAM), passionné par la création
                    d’applications modernes, performantes et sécurisées.
                </p>

                <p className="about-text">
                    Je m’intéresse particulièrement à l’architecture web, aux API et à la
                    cybersécurité. J’aime comprendre les systèmes en profondeur et construire
                    des solutions fiables, pensées pour des usages réels.
                </p>

                <ul className="about-list">
                    <li>Applications web modernes (front + back)</li>
                    <li>API, bases de données et logique métier</li>
                    <li>Interfaces UI propres, claires et efficaces</li>
                    <li>Optimisation, fiabilité et sécurité</li>
                </ul>

                <div className="stack">
                    <h3>Stack principale</h3>

                    <div className="tags">
                        <span>React</span>
                        <span>Vite</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>PHP</span>
                        <span>MySQL</span>
                        <span>Git</span>
                        <span>Docker</span>
                    </div>
                </div>

                <p className="about-goal">
                    Mon objectif : devenir un développeur capable de concevoir des
                    applications robustes, évolutives et bien pensées avec une vraie
                    attention à la sécurité.
                </p>

            </div>
        </section>
    );
}