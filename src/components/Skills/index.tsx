'use client'
import { useState } from "react";
import { IconType } from "react-icons";
import {
    SiBootstrap,
    SiExpress,
    SiFastify,
    SiFigma,
    SiGit,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPrisma,
    SiReact,
    SiSass,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import BubbleHover from "../BubbleHover";
import TabSection from "../Tab";
import Title from "../Title";

type SkillType = "frontend" | "backend" | "database" | "other";

interface Skill {
    name: string;
    icon: IconType;
    type: SkillType;
}

const skills: Skill[] = [
    { name: "React", icon: SiReact, type: "frontend" },
    { name: "Next.js", icon: SiNextdotjs, type: "frontend" },
    { name: "TypeScript", icon: SiTypescript, type: "frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, type: "frontend" },
    { name: "Bootstrap", icon: SiBootstrap, type: "frontend" },
    { name: "Sass", icon: SiSass, type: "frontend" },
    { name: "Node.js", icon: SiNodedotjs, type: "backend" },
    { name: "Express", icon: SiExpress, type: "backend" },
    { name: "Fastify", icon: SiFastify, type: "backend" },
    { name: "PHP", icon: SiPhp, type: "backend" },
    { name: "MongoDB", icon: SiMongodb, type: "database" },
    { name: "MySQL", icon: SiMysql, type: "database" },
    { name: "Prisma", icon: SiPrisma, type: "database" },
    { name: "Git", icon: SiGit, type: "other" },
    { name: "Figma", icon: SiFigma, type: "other" },
];

export default function Skills() {
    const [selectedTab, setSelectedTab] = useState("All")

    const skillsType = [...new Set(skills.map(skill => skill.type))]

    const filteredSkills = selectedTab === "All" 
        ? skills 
        : skills.filter(skill => skill.type === selectedTab)


        return (
            <>
                <section
                    id={"skills"}
                    className={"relative overflow-hidden py-20 px-4 bg-[var(--foreground)] z-100"}
                >
                    <div className="section">
                        <Title text={"Skills"} />
                        <div className="flex flex-wrap items-center my-12">
                            <TabSection text={"All"} active={selectedTab === 'All'} onClick={() => setSelectedTab("All")} />

                            {
                                skillsType.map((type, index) => (
                                    <TabSection
                                        key={index}
                                        text={type.charAt(0).toUpperCase() + type.slice(1)}
                                        active={selectedTab === type}
                                        onClick={() => setSelectedTab(type)}
                                    />
                                ))
                            }

                        </div>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                            {
                                filteredSkills.map((skill, index) => (
                                    <BubbleHover key={index} width="180px">
                                        <div className="flex flex-col items-center gap-2">
                                            <skill.icon className="text-8xl fill-current" />
                                            <span className="link">{skill.name}</span>
                                        </div>
                                    </BubbleHover>
                                ))

                            }
                        </div>
                    </div>

                </section>
            </>
        )
    }