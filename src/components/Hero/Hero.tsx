import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <span className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Disponible para proyectos
        </span>

        <h1 className="hero__title">
          <span className="hero__greeting">hola, soy</span>
          <span className="hero__name">
            Aixa Mengassini<span className="hero__name-dot">.</span>
          </span>
        </h1>

        <p className="hero__role">Full stack web developer</p>

        <p className="hero__description">
          Desarrollo aplicaciones web modernas y funcionales, desde el frontend hasta el backend.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__cta hero__cta--primary">
            Ver proyectos <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="hero__cta hero__cta--secondary">
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
