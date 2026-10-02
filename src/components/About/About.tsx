import "./About.css";

const FACTS = [
  { label: "Ubicación", value: "Buenos Aires, GBA" },
  { label: "Formación", value: "Licenciatura en Sistemas · UNLA (en curso)" },
  { label: "Idiomas", value: "Español · Inglés B1" },
  { label: "Stack favorito", value: "Node.js · React · Next.js · PostgreSQL" },
] as const;

function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <header className="about__header">
          <span className="about__eyebrow">01 — Sobre mí</span>
          <h2 className="about__title">
            Un poco de contexto<span className="about__title-dot">.</span>
          </h2>
        </header>

        <div className="about__content">
          <div className="about__bio">
            <p>
              Soy desarrolladora full-stack basada en el GBA, actualmente cursando la Licenciatura
              en Sistemas en la UNLA. Trabajo con Node.js, React, Next.js y PostgreSQL para
              construir productos web que combinen buen código con experiencias cuidadas.
            </p>
            <p>
              Me gusta pensar los proyectos desde las dos puntas: la lógica detrás y la interfaz que
              la hace tangible. Cuando no estoy frente al compu, me vas a encontrar con el bajo en
              las manos.
            </p>
          </div>

          <ul className="about__facts">
            {FACTS.map(({ label, value }) => (
              <li key={label} className="fact">
                <span className="fact__label">
                  {label}
                  <span className="fact__label-dot">.</span>
                </span>
                <span className="fact__value">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
