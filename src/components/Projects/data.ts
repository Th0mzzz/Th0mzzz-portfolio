import {
  SiExpress,
  SiFastify,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    year: 2025,
    title: "Jandira Official Website",
    description:
      "'Jandira Official Website' is an official website for the city of Jandira, providing information about the city, its history, culture, tourism, and public services like city announcements and event listings and digital services. The website features a modern design, responsive layout, and interactive elements to enhance user experience.",
    quote:
      "Jandira at your fingertips — everything about the city, in one place.",
    techStack: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Fastify", icon: SiFastify },
      { name: "Prisma", icon: SiPrisma },
      { name: "MySQL", icon: SiMysql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    githubUrl: "",
    liveUrl: "https://portal.jandira.sp.gov.br/",
    category: "fullstack",
    image: "../jandira-site-print.png",
    featured: true,
  },
  {
    id: "2",
    year: 2024,
    title: "QuasArt",
    // description:
    //   "Quasart é seu novo destino online para explorar o universo do entretenimento! De filmes a livros, passando por séries, stand-ups, podcasts e teatro, reunimos tudo em um só lugar para garantir que você encontre exatamente o que procura de maneira rápida e eficiente. Com uma plataforma desenhada para destacar o que é popular e adaptada às suas preferências, a descoberta do seu próximo passatempo favorito fica a apenas alguns cliques de distância. Seja você um fã ávido por novidades ou uma empresa buscando ampliar sua visibilidade, Quasart é o ponto de encontro perfeito",
    // quote:
    //   "Crie seu próprio universo e deixe fluir a sua criatividade com a criação de vídeos, resenhas e fichas.",
    description:
      "Quasart is your new go-to destination for exploring the world of entertainment — movies, series, books, stand-up, podcasts, and theater, all in one place. Built to highlight what's trending and tailored to your preferences, your next favorite is just a few clicks away. Whether you're a fan hungry for new discoveries or a business looking to expand your reach, Quasart is where it all comes together.",
    quote:
      "Create your own universe and let your creativity flow through videos, reviews, and profiles.",
    techStack: [
      { name: "Javascript", icon: SiJavascript },
      { name: "EJS", icon: SiJavascript },
      { name: "Express", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    githubUrl: "https://github.com/Th0mzzz/QuasArt",
    liveUrl: "https://quasart.onrender.com/",
    category: "fullstack",
    featured: false,
    image: "../quasart-print.png",
  },
];

export const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Fullstack" },
  { key: "backend", label: "Backend" },
];
