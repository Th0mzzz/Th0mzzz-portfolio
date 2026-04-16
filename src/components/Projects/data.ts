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
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Prisma", icon: SiPrisma },
      { name: "MySQL", icon: SiMysql },
      { name: "Fastify", icon: SiFastify },
    ],
    githubUrl: "",
    liveUrl: "https://portal.jandira.sp.gov.br/",
    category: "fullstack",
    image: "../jandira-site-print.png",
    featured: true,
  },
  {
    id: "2",
    year: 2025,
    title: "QuasArt",
    description: "A",
    quote: "",
    techStack: [
      { name: "Javascript", icon: SiJavascript },
      { name: "EJS", icon: SiJavascript },
      { name: "Express", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    githubUrl: "https://github.com/th0mzzz/dashboard",
    liveUrl: "https://dashboard-demo.vercel.app",
    category: "frontend",
    featured: true,
  },
];

export const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Fullstack" },
  { key: "backend", label: "Backend" },
];
