export type Project = {
  slug: string;
  title: string;
  role?: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "forit-recognitions",
    title: "ForIT — Reconocimiento",
    role: "Fullstack",
    description:
      "Plataforma interna que permite a los equipos tech reconocer públicamente el trabajo de sus pares, destacar logros y hacer visible el aporte individual dentro de la organización.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "GitHub Actions",
    ],
    liveUrl: "https://recognitions.forit.ar/",
    image: "/projects/forit-recognitions.png",
  },
  {
    slug: "conectados-empower",
    title: "Conectados — EMpower",
    role: "Fullstack",
    description:
      "Biblioteca pública que centraliza guías, protocolos y herramientas validadas sobre salud mental juvenil en América Latina, pensada para profesionales, educadores y organizaciones que acompañan a chicas, chicos y adolescentes.",
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
      "Docker",
    ],
    liveUrl: "https://empower.forit.ar/",
    image: "/projects/conectados-empower.png",
  },
  {
    slug: "forit-web",
    title: "ForIT Web",
    role: "Fullstack",
    description:
      "Sitio institucional de ForIT que presenta la empresa, los servicios de desarrollo y los proyectos realizados para clientes.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "AWS S3",
      "Yarn Workspaces",
      "Docker",
    ],
    liveUrl: "https://forit.ar/",
    image: "/projects/forit-web.png",
  },
];
