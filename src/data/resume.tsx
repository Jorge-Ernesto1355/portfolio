import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Jorge Ernesto",
  initials: "JE",
  url: "https://jorge-ernesto.com",
  location: "Los Mochis, Sinaloa, México",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Ingeniero de software Apasionado por crear, innovar y transformar ideas en realidad. Mi misión es ayudar a las personas y generar impacto.",
  summary:
    "Desarrollador Web con 1 año y medio  de experiencia en el desarrollo de software, trabajando con diversas tecnologías y participando en todas las fases del ciclo de vida del proyecto. Además, cuento con experiencia en diseño y estructuración de proyectos, aportando soluciones eficientes y optimizadas.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "MySQL",
    "Postgres",
    "MongoDB",
    "Redis",
    "Docker",
    "TailwindCSS",
    "Python",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "jorge.ernestots@gmail.com",
    tel: "+52 6981119319",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Jorge-Ernesto1355",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jorge-ernesto-torres-412617296/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Email",
        url: "mailto:jorge.ernestots@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "Universidad Autonoma de Sinaloa",
      href: "https://uadeo.mx",
      degree: "Ingeniero en software",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVe4jyYOlXsVEJwlowPTjwKJJgMNVMBsDFQ&s",
      start: "2023",
      end: "present",
    },
  ],
  projects: [
    {
      title: "Red Social",
      href: "",
      dates: "Jan 2022 - Feb 2023",
      active: true,
      description:
        "Desarrollé tanto el frontend como el backend en su totalidad, manejando todas las peticiones y la comunicación en cola, utilizando WebSockets para mensajes en tiempo real y WebRTC para videollamadas. Además, implementé algoritmos avanzados para filtrar las publicaciones y clasificarlas según su nivel de interacción.",
      technologies: [
        "React",
        "MongoDB",
        "CSS",
        "Express",
        "Redis",
        "Web sockets",
        "Web RTC",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Jorge-Ernesto1355/socialMedia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/social_media.png",
      video: "",
    },
    {
      title: "AI MasterCraft",
      href: "",
      dates: "agosto 2024 - febrero 2025",
      active: true,
      description:
        "Desarrollé un proyecto para la creación de IA personalizadas, permitiendo generar modelos de texto a texto, texto a imagen, video y audio. Su arquitectura hexagonal y el uso del patrón Repository brindan flexibilidad para cambiar tanto la base de datos como los servicios de IA según sea necesario. La comunicación en tiempo real entre cliente y servidor se gestiona mediante Server-Sent Events, asegurando una transmisión unidireccional eficiente.",
      technologies: [
        "React",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Express",
        "Redis",
        "Server-Send Events",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Jorge-Ernesto1355/AI_MASTERCRAFT_CLIENT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AIMASTERCRAFT.png",
      video: "",
    },
    {
      title: "InsightFlow",
      href: "https://llm.report",
      dates: "February 2025 - present",
      active: true,
      description:
        "Desarrollé una web que permite cargar datos en formato CSV y, mediante IA, identificar patrones útiles en distintos escenarios. Por ejemplo, en un hospital, la IA puede analizar historiales de pacientes y detectar síntomas o características previas al desarrollo de cáncer.",
      technologies: [
        "React",
        "Typescript",
        "Tanstack Query",
        "Tailwind",
        "Python",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/InsightFlow.png",
      video: "",
    },
    {
      title: "React Chat AI Widget",
      href: "",
      dates: "May 2025 - july 2025",
      active: false,
      description:
        "React Chat AI Widget es una librería de chat fácil de integrar que permite crear asistentes conversacionales personalizados. Tú defines las respuestas y el comportamiento del bot, ideal para proyectos que requieren interacción controlada con IA. Construido con Next.js, TypeScript y tecnologías modernas como TailwindCSS Cloudflare Workers.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Jorge-Ernesto1355/React-Chat-AI-Widget",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "npm package",
          href: "https://www.npmjs.com/package/react-chat-ai-widget",
        },
      ],
      image: "/ChatWidgetLeft.png",
    },
  ],
} as const;
