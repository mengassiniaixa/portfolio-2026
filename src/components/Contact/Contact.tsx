import { useState, type FormEvent } from "react";
import "./Contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const DIRECT_EMAIL = "aixamengassini14@gmail.com";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/mengassiniaixa", handle: "@mengassiniaixa" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aixa-mengassini", handle: "/aixa-mengassini" },
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

async function submitContactForm(payload: ContactPayload): Promise<void> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload: ContactPayload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      await submitContactForm(payload);
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "No pudimos enviar el mensaje. Probá de nuevo o escribime por mail.",
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <header className="contact__header">
          <span className="contact__eyebrow">05 — Contacto</span>
          <h2 className="contact__title">
            Hablemos<span className="contact__title-dot">.</span>
          </h2>
          <p className="contact__lede">
            ¿Tenés un proyecto en mente, una oportunidad para charlar o simplemente querés saludar?
            Dejame un mensaje y te respondo.
          </p>
        </header>

        <div className="contact__grid">
          <aside className="contact__aside">
            <div className="contact__direct">
              <span className="contact__direct-label">
                Mail directo<span className="contact__direct-dot">.</span>
              </span>
              <a className="contact__direct-value" href={`mailto:${DIRECT_EMAIL}`}>
                {DIRECT_EMAIL}
              </a>
            </div>

            <ul className="contact__socials">
              {SOCIALS.map(({ label, href, handle }) => (
                <li key={label} className="contact__social">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                  >
                    <span className="contact__social-label">{label}</span>
                    <span className="contact__social-handle">
                      {handle} <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label className="field__label" htmlFor="contact-name">
                Nombre
              </label>
              <input
                id="contact-name"
                className="field__input"
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={isSubmitting}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                className="field__input"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={isSubmitting}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="contact-message">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                className="field__input field__input--textarea"
                name="message"
                rows={5}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="contact__actions">
              <button
                type="submit"
                className="contact__submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Enviando…" : "Enviar mensaje"}
                {!isSubmitting && <span aria-hidden="true">→</span>}
              </button>

              <p className="contact__status" role="status" aria-live="polite">
                {status === "success" && "Mensaje enviado. Te respondo en breve."}
                {status === "error" && errorMsg}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
