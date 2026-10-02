import { useEffect, useState } from "react";
import "./Experience.css";
import { JOBS, CERTIFICATIONS, type Certification } from "../../data/experience";

function Experience() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  useEffect(() => {
    if (!activeCert) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCert(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeCert]);

  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <header className="experience__header">
          <span className="experience__eyebrow">04 — Experiencia</span>
          <h2 className="experience__title">
            Trayectoria y formación<span className="experience__title-dot">.</span>
          </h2>
        </header>

        <div className="experience__grid">
          <div className="experience__column">
            <h3 className="experience__column-label">
              Trabajo<span className="experience__column-dot">.</span>
            </h3>

            <ul className="experience__list">
              {JOBS.map((job) => (
                <li key={`${job.company}-${job.role}`} className="job">
                  <div className="job__head">
                    <span className="job__role">{job.role}</span>
                    <span className="job__period">{job.period}</span>
                  </div>
                  <span className="job__company">{job.company}</span>
                  <ul className="job__bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="job__bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="experience__column">
            <h3 className="experience__column-label">
              Certificaciones<span className="experience__column-dot">.</span>
            </h3>

            <ul className="experience__list">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.name} className="cert">
                  <button
                    type="button"
                    className="cert__thumb"
                    onClick={() => setActiveCert(cert)}
                    aria-label={`Ampliar ${cert.name}`}
                  >
                    <img src={cert.image} alt={cert.imageAlt} loading="lazy" />
                    <span className="cert__thumb-hint" aria-hidden="true">
                      Ver
                    </span>
                  </button>

                  <div className="cert__body">
                    <h4 className="cert__name">{cert.name}</h4>
                    <p className="cert__issuers">{cert.issuers.join(" · ")}</p>
                    <span className="cert__date">Emitido en {cert.issuedOn}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {activeCert && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.name}
          onClick={() => setActiveCert(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label="Cerrar"
            onClick={(event) => {
              event.stopPropagation();
              setActiveCert(null);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>

          <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img className="lightbox__image" src={activeCert.image} alt={activeCert.imageAlt} />
            <figcaption className="lightbox__caption">
              {activeCert.name} · {activeCert.issuers.join(" · ")}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export default Experience;
