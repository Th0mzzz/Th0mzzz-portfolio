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
import {ProjectCategory, TechStack} from "./types";

export interface ProjectBase {
  id: string;
  year: number;
  techStack: TechStack[];
  githubUrl?: string;
  liveUrl?: string;
  category: Exclude<ProjectCategory, "all" | "mobile">;
  image?: string;
  featured?: boolean;
}

export const projectBase: ProjectBase[] = [
  {
    id: "1",
    year: 2025,
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

export const projectCategoryKeys: Array<Exclude<ProjectCategory, "mobile">> = [
  "all",
  "frontend",
  "fullstack",
  "backend",
];
