import "./entreprise.css";

export default function Entreprise() {
    return (
        <main className="entreprise-page">
            <section className="entreprise-hero">
                <div className="entreprise-hero-content">
                    <span className="entreprise-badge">Alternance • AEVA</span>

                    <h1 className="entreprise-title">
                        AEVA, une entreprise industrielle spécialisée en électrothermie
                    </h1>

                    <p className="entreprise-subtitle">
                        Dans le cadre de mon alternance, j’évolue au sein d’AEVA, une
                        entreprise française spécialisée dans la conception et la fabrication
                        de résistances chauffantes, thermoplongeurs et solutions de chauffage
                        industriel destinées aux professionnels.
                    </p>

                    <div className="entreprise-hero-stats">
                        <div className="stat-card">
                            40+
                            <span>collaborateurs</span>
                        </div>

                        <div className="stat-card">
                            1984
                            <span>création de la filiale française</span>
                        </div>

                        <div className="stat-card">
                            B2B
                            <span>activité tournée vers l’industrie</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="entreprise-section">
                <div className="section-heading">
                    <span className="section-tag">Présentation</span>
                    <h2>Qui est AEVA ?</h2>
                </div>

                <div className="entreprise-grid two-columns">
                    <div className="info-card">
                        <h3>Une entreprise industrielle experte</h3>
                        <p>
                            AEVA, Ateliers Electrothermiques de Vic-sur-Aisne,
                            est une entreprise spécialisée dans la{" "}
                            fabrication d’équipements de chauffage industriel.
                            Elle développe des solutions permettant le réchauffage de fluides
                            et de solides par énergie électrique.
                        </p>
                        <p>
                            Son activité repose sur un savoir-faire technique reconnu, avec une
                            capacité à proposer à la fois des{" "}
                            produits standards et des réalisations{" "}
                            sur mesure selon les plans et les contraintes
                            techniques des clients.
                        </p>
                    </div>

                    <div className="info-card">
                        <h3>Un positionnement orienté performance</h3>
                        <p>
                            AEVA dispose de son propre réseau de{" "}
                            développement, fabrication et commercialisation.
                            L’entreprise intervient principalement auprès d’une clientèle
                            industrielle en France et à l’export.
                        </p>
                        <p>
                            Elle s’appuie sur des valeurs fortes comme la{" "}
                            fiabilité, la rapidité et la{" "}
                            réactivité, avec une logique d’amélioration
                            continue de ses produits et de ses services.
                        </p>
                    </div>
                </div>
            </section>

            <section className="entreprise-section alt-bg">
                <div className="section-heading">
                    <span className="section-tag">Historique</span>
                    <h2>Repères clés</h2>
                </div>

                <div className="timeline">
                    <div className="timeline-item">
                        <span className="timeline-year">1930</span>
                        <div className="timeline-content">
                            <h3>Origine du procédé</h3>
                            <p>
                                Christian Backer dépose le brevet du procédé de fabrication de la
                                résistance électrique blindée.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <span className="timeline-year">1984</span>
                        <div className="timeline-content">
                            <h3>Création de Backer France</h3>
                            <p>
                                La filiale française est créée à Compiègne afin d’assembler et
                                transformer des résistances électriques blindées.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <span className="timeline-year">1990</span>
                        <div className="timeline-content">
                            <h3>Installation à Vic-sur-Aisne</h3>
                            <p>
                                L’entreprise développe son propre outil de production et quitte
                                Compiègne pour s’implanter à Vic-sur-Aisne.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <span className="timeline-year">1992</span>
                        <div className="timeline-content">
                            <h3>Naissance d’AEVA</h3>
                            <p>
                                Après son rachat, Backer France devient{" "}
                                AEVA, Ateliers Electrothermiques de Vic-sur-Aisne.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <span className="timeline-year">2012</span>
                        <div className="timeline-content">
                            <h3>Développement du pôle usinage</h3>
                            <p>
                                Intégration d’un pôle usinage / décolletage pour renforcer la
                                diversité et la maîtrise de la production.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <span className="timeline-year">2013+</span>
                        <div className="timeline-content">
                            <h3>Modernisation technique</h3>
                            <p>
                                Mise en place d’outils de CAO / DAO, utilisation de SolidWorks et
                                renforcement des études thermiques et fluidiques.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="entreprise-section">
                <div className="section-heading">
                    <span className="section-tag">Activité</span>
                    <h2>Domaines d’intervention</h2>
                </div>

                <div className="entreprise-grid cards-grid">
                    <div className="feature-card">
                        <h3>Électrothermie industrielle</h3>
                        <p>
                            Conception et fabrication d’éléments chauffants pour les besoins de
                            l’industrie.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Produits standards</h3>
                        <p>
                            Mise à disposition de thermoplongeurs et ailettes standards prêts à
                            la vente directe.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Solutions sur mesure</h3>
                        <p>
                            Fabrication sur plans et spécifications clients pour répondre à des
                            contraintes techniques précises.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Usinage / décolletage</h3>
                        <p>
                            Appui d’un pôle de production complémentaire permettant d’élargir la
                            diversité des pièces et composants.
                        </p>
                    </div>
                </div>
            </section>

            <section className="entreprise-section alt-bg">
                <div className="section-heading">
                    <span className="section-tag">Valeurs</span>
                    <h2>Les engagements de l’entreprise</h2>
                </div>

                <div className="pillars">
                    <div className="pillar-card">
                        <h3>Disponibilité</h3>
                        <p>
                            Être réactif et à l’écoute des besoins et attentes des clients.
                        </p>
                    </div>

                    <div className="pillar-card">
                        <h3>Productivité</h3>
                        <p>
                            Optimiser l’organisation et les moyens de production pour gagner en
                            efficacité.
                        </p>
                    </div>

                    <div className="pillar-card">
                        <h3>Qualité</h3>
                        <p>
                            S’inscrire dans une logique d’amélioration continue avec un objectif
                            de qualité durable.
                        </p>
                    </div>

                    <div className="pillar-card">
                        <h3>Communication</h3>
                        <p>
                            Développer la visibilité et renforcer les échanges internes et
                            externes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="entreprise-section">
                <div className="section-heading">
                    <span className="section-tag">Pourquoi cette alternance</span>
                    <h2>Ce que cette expérience m’apporte</h2>
                </div>

                <div className="entreprise-grid two-columns">
                    <div className="info-card">
                        <h3>Un environnement technique concret</h3>
                        <p>
                            Mon alternance chez AEVA me permet d’évoluer sur des applications
                            utilisées en production, directement liées à une activité
                            industrielle. J’interviens sur des outils métiers nécessitant une
                            forte rigueur technique, notamment sur des problématiques de
                            compatibilité, de performance et de stabilité.
                        </p>
                        <p>
                            Cette immersion me confronte à du code existant (legacy), à des
                            contraintes réelles d’exploitation et à des besoins métiers précis,
                            ce qui m’amène à adopter une approche structurée et orientée
                            résolution de problèmes.
                        </p>
                    </div>

                    <div className="info-card">
                        <h3>Une montée en compétences technique</h3>
                        <p>
                            Cette expérience me permet de développer des compétences concrètes
                            en développement web et en environnement système :
                        </p>

                        <ul>
                            <li>Migration et modernisation d’applications (PHP 5.6 → PHP 8.2)</li>
                            <li>Analyse et correction de bugs en environnement de production</li>
                            <li>Optimisation du code et amélioration des performances</li>
                            <li>Manipulation et optimisation de bases de données MySQL</li>
                            <li>Compréhension et intégration de logiques métier</li>
                            <li>Travail sur des interfaces web (HTML, CSS, JavaScript)</li>
                            <li>Lecture, compréhension et refactorisation de code existant</li>
                        </ul>

                        <p>
                            Au-delà des aspects techniques, cette alternance me permet de mieux
                            comprendre les enjeux d’une entreprise : fiabilité des outils,
                            impact direct sur les utilisateurs et nécessité de produire un code
                            maintenable et évolutif.
                        </p>

                        <p>
                            Dans ce contexte, j’ai eu l’opportunité de travailler sur plusieurs
                            projets concrets, dont un outil de calcul en ligne utilisé par les
                            clients pour configurer et commander des produits techniques, que
                            je détaille ci-dessous.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}