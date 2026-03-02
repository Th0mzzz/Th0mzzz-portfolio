import { IconType } from "react-icons";

export interface TechStack {
    name: string;
    icon: IconType;
}

export interface Project {
    id: string;
    year: number;
    title: string;
    description: string;
    quote: string;
    techStack: TechStack[];
    githubUrl?: string;
    liveUrl?: string;
    category: ProjectCategory;
    thumbnail?: string;
    image?: string;
    featured?: boolean;
}

export type ProjectCategory = "all" | "frontend" | "fullstack" | "backend" | "mobile";

