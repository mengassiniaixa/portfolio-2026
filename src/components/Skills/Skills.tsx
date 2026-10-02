import "./Skills.css";

/* Placeholder list — reemplazá por tu lista final cuando la tengas. */
const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "HTML",
  "CSS",
  "SQL",
  "Git",
  "GitHub",
  "Vite",
  "VS Code",
] as const;

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <div className="skills__header-inner">
          <span className="skills__eyebrow">02 — Skills</span>
          <h2 className="skills__title">
            Mi caja de herramientas<span className="skills__title-dot">.</span>
          </h2>
        </div>
      </div>

      <div className="skills__marquee" aria-label="Lista de skills y tecnologías">
        <div className="skills__track">
          {SKILLS.map((skill) => (
            <span key={`a-${skill}`} className="skills__item">
              {skill}
              <span className="skills__sep" aria-hidden="true">
                /
              </span>
            </span>
          ))}
          {SKILLS.map((skill) => (
            <span key={`b-${skill}`} className="skills__item" aria-hidden="true">
              {skill}
              <span className="skills__sep">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
