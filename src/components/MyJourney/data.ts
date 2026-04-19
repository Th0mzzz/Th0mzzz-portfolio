import {JourneyCategory} from "./types";

export interface JourneyBaseItem {
  id: string;
  category: Exclude<JourneyCategory, "all">;
  organizationLogo?: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  skills?: string[];
}

export const journeyTabKeys: JourneyCategory[] = ["all", "work", "education"];

export const journeyItemBase: JourneyBaseItem[] = [
  {
    id: "1",
    category: "work",
    organizationLogo: "",
    startDate: "02/2025",
    endDate: "",
    isCurrent: true,
    skills: [
      "React",
      "Figma",
      "TypeScript",
      "Node.js",
      "Fastify",
      "Tailwind CSS",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Github",
      "Git",
      "Linux",
      "Swagger",
    ],
  },
  {
    id: "2",
    category: "work",
    organizationLogo: "",
    startDate: "07/2023",
    endDate: "12/2024",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Git",
      "Bootstrap",
      "Figma",
    ],
  },
  {
    id: "3",
    category: "education",
    organizationLogo: "",
    startDate: "01/2022",
    endDate: "12/2024",
    skills: [
      "JavaScript",
      "Node.JS",
      "MySQL",
      "Git",
      "EJS",
      "Bootstrap",
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
  },
  {
    id: "4",
    category: "education",
    startDate: "01/2025",
    endDate: "12/2028",
    skills: [
      "Scrum",
      "Figma",
      "JavaScript",
      "React",
      "Node.js",
      "Database Design",
      "MySQL",
      "Domain Drive Design",
      "Java",
      "Git",
      "Arduino",
      "C++",
      "VR modeling",
      "Python",
      "Dinamic Programming",
    ],
  },
  {
    id: "5",
    category: "education",
    startDate: "09/2023",
    endDate: "09/2026",
    skills: [
      "English",
      "Communication",
      "Listening",
      "Speaking",
      "Reading",
      "Writing",
    ],
  },
];
