import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
] as const;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Navegación principal">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          Aixa<span className="navbar__logo-dot">.</span>M
        </a>

        <button
          type="button"
          className="navbar__burger"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          onClick={toggleMenu}
        >
          <span className={`navbar__burger-icon ${isOpen ? "is-open" : ""}`} />
        </button>

        <div id="navbar-menu" className={`navbar__menu ${isOpen ? "is-open" : ""}`}>
          <ul className="navbar__links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="navbar__link" onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar__cta" onClick={closeMenu}>
            Hablemos <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
