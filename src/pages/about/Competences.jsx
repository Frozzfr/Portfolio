import PageFade from '../../components/PageFade';
import './Competences.css';
import skills from '../../components/data/skills.json';

import * as Fa from 'react-icons/fa';
import * as Gi from 'react-icons/gi';
import * as Gr from 'react-icons/gr';

function getIconComponent(iconName) {
  return Fa[iconName] || Gi[iconName] || Gr[iconName] || null;
}

const skillCategories = {
  "Développement front-end": ["HTML5 / CSS3", "JavaScript", "React", "Bootstrap", "Sass"],
  "Back-end & bases de données": ["PHP", "MySQL", "Node.js", "Express", "Java", "Python"],
  "Systèmes, réseaux & cybersécurité": ["Linux", "Cybersécurité", "Réseaux"],
  "Outils & environnement": ["Git", "GitHub", "Canva"]
};

const categoryDescriptions = {
  "Développement front-end":
    "Création d’interfaces web modernes, responsives et maintenables.",
  "Back-end & bases de données":
    "Développement applicatif, logique métier, traitement des données et environnement serveur.",
  "Systèmes, réseaux & cybersécurité":
    "Compétences acquises en environnement technique, maintenance, réseau et sécurité.",
  "Outils & environnement":
    "Outils utilisés dans mes projets, ma veille et mon organisation de travail."
};

function getSkillLevelLabel(level) {
  if (level >= 80) return 'Avancé';
  if (level >= 65) return 'Confirmé';
  if (level >= 50) return 'Intermédiaire';
  if (level >= 30) return 'Notions';
  return 'En apprentissage';
}

function groupSkillsByCategory(skillsList) {
  return Object.entries(skillCategories).map(([category, names]) => ({
    title: category,
    description: categoryDescriptions[category],
    skills: skillsList.filter((skill) => names.includes(skill.name))
  }));
}

function Competences() {
  const groupedSkills = groupSkillsByCategory(skills);

  return (
    <PageFade>
      <section className="competences-page">
        <div className="section-heading">
          <span className="section-tag">Compétences</span>
          <h1>Mes compétences</h1>
          <p className="competences-intro">
            Au fil de ma formation et de mon alternance, j’ai développé des compétences
            en développement web, bases de données, systèmes, réseaux et maintenance
            informatique. Cette page présente les principaux domaines sur lesquels
            j’interviens aujourd’hui.
          </p>
        </div>

        <div className="competences-grid">
          {groupedSkills.map((group) => (
            <article className="competence-card" key={group.title}>
              <h2>{group.title}</h2>
              <p>{group.description}</p>

              <div className="skills-list">
                {group.skills.map((skill) => {
                  const IconComponent = getIconComponent(skill.icon);

                  return (
                    <div className="skill-item" key={skill.name}>
                      <div className="skill-top">
                        <div className="skill-left">
                          {IconComponent && <IconComponent className="skill-icon" />}
                          <span>{skill.name}</span>
                        </div>
                        <span className="skill-level">{getSkillLevelLabel(skill.level)}</span>
                      </div>

                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
        <section className="document-section">
          <div className="document-header">
            <span className="section-tag">Document</span>
            <h2>Mon Tableau de compétences</h2>
            <p>
              Mon Tableau de compétences est consultable directement depuis cette page. Il peut aussi être
              ouvert dans un nouvel onglet ou téléchargé au format PDF.
            </p>
          </div>

          <div className="document-card">
            <div className="document-card-top">
              <div className="document-title">
                <Fa.FaFilePdf className="document-pdf-icon" />
                <div>
                  <h3>Tableau de compétences – Loïc Saouter</h3>
                  <span>Format PDF</span>
                </div>
              </div>

              <div className="document-actions">
                <a
                  href="../../../tableau-competences-loic-saouter.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="doc-btn secondary"
                >
                  <Fa.FaExternalLinkAlt />
                  Ouvrir
                </a>

                <a
                  href="../../../tableau-competences-loic-saouter.pdf"
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
                src="../../../tableau-competences-loic-saouter.pdf"
                title="Aperçu du Tableau de compétences de Loïc Saouter"
              />
            </div>
          </div>
        </section>
      </section>
    </PageFade>
  );
}

export default Competences;