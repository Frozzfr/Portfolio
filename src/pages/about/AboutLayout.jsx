import { NavLink, Outlet } from "react-router-dom";
import {
    User,
    Building2,
    Code2,
    History,
    Target,
    ArrowRight,
} from "lucide-react";

import "./AboutLayout.css";

const items = [
    { to: "moi", label: "Moi", icon: User, desc: "Profil & présentation" },
    { to: "entreprise", label: "Entreprise", icon: Building2, desc: "Alternance & missions" },
    { to: "competences", label: "Compétences", icon: Code2, desc: "Stack & outils" },
    { to: "parcours", label: "Parcours", icon: History, desc: "Timeline & expériences" },
    { to: "objectifs", label: "Objectifs", icon: Target, desc: "Vision & next step" },
];

export default function AboutLayout() {
    return (
        <main className="aboutDash">
            <header className="aboutDash__header">
                <h1>À propos</h1>
                <p>Tout ce qu’il faut pour te comprendre en 30 secondes.</p>
            </header>

            <div className="aboutDash__grid">
                <aside className="aboutDash__side">
                    <div className="aboutDash__card">
                        <div className="aboutDash__title">Navigation</div>

                        <nav className="aboutDash__nav" aria-label="Navigation À propos">
                            {items.map(({ to, label, icon: Icon, desc }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    className={({ isActive }) =>
                                        `aboutDash__link ${isActive ? "is-active" : ""}`
                                    }
                                    end={to === "moi"}
                                >
                                    <span className="aboutDash__icon">
                                        <Icon size={18} />
                                    </span>

                                    <span className="aboutDash__text">
                                        <span className="aboutDash__label">
                                            {label}
                                            <ArrowRight className="aboutDash__arrow" size={16} />
                                        </span>
                                        <span className="aboutDash__desc">{desc}</span>
                                    </span>
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </aside>

                <section className="aboutDash__content">
                    <Outlet />
                </section>
            </div>
        </main>
    );
}