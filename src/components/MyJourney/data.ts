import {JourneyItem, JourneyTab} from "./types";

export const journeyTabs: JourneyTab[] = [
    {key: "all", label: "All"},
    {key: "work", label: "Work Experience"},
    {key: "education", label: "Education"},
];

export const journeyItems: JourneyItem[] = [
    {
        id: "1",
        category: "work",
        title: "IT Advisor (Junior Developer)",
        organization: "Jandira's City Hall",
        organizationLogo: "",
        startDate: "02/2025",
        endDate: "Now",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum condimentum massa, sit amet maximus eros egestas quis. Pellentesque molestie, velit eu suscipit dapibus, sem urna accumsan erat, eget sagittis elit tellus a dui. Vestibulum quis dictum odio. Integer aliquet sagittis turpis, sed congue eros egestas at. Sed ultricies urna vel tellus dictum porta. Aliquam nec lobortis lorem. Maecenas in dui convallis risus sollicitudin finibus. Proin et rutrum libero.",
        skills: ["React", "Figma", "TypeScript", "Node.js", "Fastify", "Tailwind CSS", "Bootstrap", "PHP", "MySQL", "Github", "Linux"],
    },
    {
        id: "2",
        category: "work",
        title: "Internship - Web Developer",
        organization: "Jandira's City Hall",
        organizationLogo: "",
        startDate: "07/2023",
        endDate: "12/2024",
        description:
            "Developed custom websites and web applications for small businesses and startups. Focused on delivering responsive, accessible, and performant solutions using modern web technologies. Handled full project lifecycle from design to deployment.",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
    },
    {
        id: "3",
        category: "education",
        title: "Information for Internet Technical Course",
        organization: "FIEBTECH",
        organizationLogo: "",
        startDate: "01/2022",
        endDate: "12/2024",
        description:
            "Technical course focused on software development, covering programming fundamentals, database management, web development, and software engineering principles. Hands-on projects using various technologies and agile methodologies.",
        skills: ["JavaScript", "Node.JS", "MySQL", "Git", "EJS", "Bootstrap", "Figma", "Adobe Illustrator", "Adobe Photoshop"],
    },
    {
        id: "4",
        category: "education",
        title: "Software Engineering",
        organization: "FIAP",
        startDate: "01/2025",
        endDate: "12/2028",
        description:
            "Completed high school with a focus on sciences and mathematics. Participated in technology fairs and programming competitions, developing early interest in software development.",
    },
    {
        id: "5",
        category: "education",
        title: "English Course",
        organization: "Wizard",
        startDate: "09/2023",
        endDate: "09/2027",
        description:
            "Completed high school with a focus on sciences and mathematics. Participated in technology fairs and programming competitions, developing early interest in software development.",
    },
];

