export type Job = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type Certification = {
  name: string;
  issuers: string[];
  issuedOn: string;
  image: string;
  imageAlt: string;
};

export const JOBS: Job[] = [
  {
    company: "ForIT",
    role: "Fullstack Developer",
    period: "Marzo 2026 — Presente",
    bullets: [
      "Coordinación de equipo: dirección de dailies y participación activa en reuniones de refinamiento.",
      "Gestión del flujo de trabajo: creación de tickets, revisión y aprobación de pull requests, merges y participación en deploys.",
      "Desarrollo fullstack sobre los productos internos y proyectos para clientes del estudio.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Programador Profesional Web Fullstack",
    issuers: ["ForIT", "Fundación Formar", "Ulthar Academy"],
    issuedOn: "Agosto 2026",
    image: "/certs/aixa_mengassini_fullstack_diploma_fformar.png",
    imageAlt:
      "Certificado de Programador Profesional Web Fullstack emitido por ForIT, Fundación Formar y Ulthar Academy",
  },
];
