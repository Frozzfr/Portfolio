import "./Parcours.css";

export default function Parcours() {
    return (
        <section className="parcours-page">
            <div className="section-heading">
                <span className="section-tag">Parcours</span>
                <h1>Mon parcours</h1>
                <p className="parcours-intro">
                    Mon parcours s’est construit autour de l’informatique, des réseaux et du
                    développement web. Depuis le Bac Professionnel Systèmes Numériques jusqu’à
                    mon BTS SIO option SLAM en alternance, j’ai développé des compétences
                    techniques concrètes en maintenance, développement et administration
                    d’environnements informatiques.
                </p>
            </div>

            <div className="frise-alternate">
                <article className="frise-row left">
                    <div className="frise-card">
                        <span className="frise-date">2024 - Aujourd’hui</span>
                        <h3>BTS SIO – option SLAM</h3>
                        <h4>PROMEO – en contrat d’apprentissage</h4>
                        <p>
                            Formation orientée développement d’applications et solutions métiers.
                            Approfondissement du développement web, des bases de données, des API
                            et de la logique métier.
                        </p>
                        <div className="frise-tags">
                            <span>React</span>
                            <span>PHP</span>
                            <span>MySQL</span>
                            <span>API</span>
                            <span>Alternance</span>
                        </div>
                    </div>
                    <div className="frise-dot" />
                    <div className="frise-empty" />
                </article>

                <article className="frise-row right">
                    <div className="frise-empty" />
                    <div className="frise-dot" />
                    <div className="frise-card">
                        <span className="frise-date">2021 - 2024</span>
                        <h3>Bac Professionnel Systèmes Numériques</h3>
                        <h4>Lycée Professionnel Arthur Rimbaud – Ribécourt</h4>
                        <p>
                            Formation orientée réseaux informatiques, systèmes communicants,
                            installation, configuration et maintenance d’équipements numériques.
                        </p>
                        <div className="frise-tags">
                            <span>Réseaux</span>
                            <span>Systèmes</span>
                            <span>Maintenance</span>
                            <span>Cybersécurité</span>
                        </div>
                    </div>
                </article>

                <article className="frise-row left">
                    <div className="frise-card">
                        <span className="frise-date">22/01/2024 - 02/02/2024</span>
                        <h3>Stage – MICROCOM</h3>
                        <h4>Compiègne</h4>
                        <p>
                            Stage orienté maintenance informatique avec diagnostic matériel,
                            résolution de pannes et assistance technique.
                        </p>
                        <div className="frise-tags">
                            <span>Support</span>
                            <span>Maintenance</span>
                            <span>Diagnostic</span>
                        </div>
                    </div>
                    <div className="frise-dot" />
                    <div className="frise-empty" />
                </article>

                <article className="frise-row right">
                    <div className="frise-empty" />
                    <div className="frise-dot" />
                    <div className="frise-card">
                        <span className="frise-date">25/09/2023 - 20/10/2023</span>
                        <h3>Stage – GCINET</h3>
                        <h4>Ribécourt</h4>
                        <p>
                            Expérience polyvalente mêlant maintenance, serveurs, pare-feu et
                            développement web dans un environnement professionnel concret.
                        </p>
                        <div className="frise-tags">
                            <span>Serveurs</span>
                            <span>Pare-feu</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>PHP</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </article>

                <article className="frise-row left">
                    <div className="frise-card">
                        <span className="frise-date">15/05/2023 - 10/06/2023</span>
                        <h3>Stage – MICROCOM</h3>
                        <h4>Compiègne</h4>
                        <p>
                            Renforcement des bases en maintenance informatique, assistance
                            technique et interventions sur postes utilisateurs.
                        </p>
                        <div className="frise-tags">
                            <span>Maintenance</span>
                            <span>Support</span>
                            <span>Postes utilisateurs</span>
                        </div>
                    </div>
                    <div className="frise-dot" />
                    <div className="frise-empty" />
                </article>

                <article className="frise-row right">
                    <div className="frise-empty" />
                    <div className="frise-dot" />
                    <div className="frise-card">
                        <span className="frise-date">13/06/2022 - 02/07/2022</span>
                        <h3>Stage – DIRISI / CDAD</h3>
                        <h4>Toulon</h4>
                        <p>
                            Découverte d’un environnement structuré au sein des systèmes
                            d’information de la Défense, avec une première approche du
                            développement web.
                        </p>
                        <div className="frise-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>PHP</span>
                            <span>Systèmes d’information</span>
                        </div>
                    </div>
                </article>

                <article className="frise-row left">
                    <div className="frise-card">
                        <span className="frise-date">2019 - 2020</span>
                        <h3>Brevet des collèges</h3>
                        <h4>Collège Notre-Dame – Noyon</h4>
                        <p>
                            Obtention du brevet des collèges avant l’orientation vers un parcours
                            professionnel en informatique.
                        </p>
                    </div>
                    <div className="frise-dot" />
                    <div className="frise-empty" />
                </article>
            </div>
        </section>
    );
}