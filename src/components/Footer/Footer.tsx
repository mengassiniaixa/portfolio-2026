import "./Footer.css";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/mengassiniaixa" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aixa-mengassini" },
  { label: "Mail", href: "mailto:aixamengassini14@gmail.com" },
] as const;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__wordmark">
            Aixa<span className="footer__wordmark-dot">.</span>M
          </span>
          <span className="footer__tagline">Full stack web developer · Buenos Aires</span>
        </div>

        <nav className="footer__nav" aria-label="Enlaces del pie">
          <ul className="footer__links">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="footer__link"
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__meta">
          <span>© {year} Aixa Mengassini</span>
          <span aria-hidden="true" className="footer__meta-sep">
            ·
          </span>
          <span>Hecho con React + TypeScript</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
