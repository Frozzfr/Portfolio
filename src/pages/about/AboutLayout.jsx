import { NavLink, Outlet } from "react-router-dom";

export default function AboutLayout() {
    return (
        <main className="about-page">
            <h1>À propos</h1>

            <div className="about-tabs">
                <NavLink
                    to="moi"
                    className={({ isActive }) => `about-tab ${isActive ? "active" : ""}`}
                    end
                >
                    Moi
                </NavLink>

                <NavLink
                    to="entreprise"
                    className={({ isActive }) => `about-tab ${isActive ? "active" : ""}`}
                >
                    Entreprise
                </NavLink>
            </div>

            <section className="about-content">
                <Outlet />
            </section>
        </main>
    );
}