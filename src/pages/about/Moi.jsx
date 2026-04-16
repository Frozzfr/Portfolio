import "./Moi.css";

import PageFade from '../../components/PageFade';

import * as Fa from 'react-icons/fa';


export default function Moi() {
    return (
        <>
            <PageFade>
                <div className="about-page">
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

                    <section className="document-section">
                        <div className="document-header">
                            <span className="section-tag">Document</span>
                            <h2>Mon CV</h2>
                            <p>
                                Mon CV est consultable directement depuis cette page. Il peut aussi être
                                ouvert dans un nouvel onglet ou téléchargé au format PDF.
                            </p>
                        </div>

                        <div className="document-card">
                            <div className="document-card-top">
                                <div className="document-title">
                                    <Fa.FaFilePdf className="document-pdf-icon" />
                                    <div>
                                        <h3>CV – Loïc Saouter</h3>
                                        <span>Format PDF</span>
                                    </div>
                                </div>

                                <div className="document-actions">
                                    <a
                                        href="../../../documents/cv-loic-saouter.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="doc-btn secondary"
                                    >
                                        <Fa.FaExternalLinkAlt />
                                        Ouvrir
                                    </a>

                                    <a
                                        href="../../../documents/cv-loic-saouter.pdf"
                                        download
                                        className="doc-btn primary"
                                    >
                                        <Fa.FaDownload />
                                        Télécharger
                                    </a>
                                </div>
                            </div>

                            <div className="document-preview">
                                <iframe
                                    src="../../../documents/cv-loic-saouter.pdf"
                                    title="Aperçu du CV de Loïc Saouter"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </PageFade>
        </>
    );
}