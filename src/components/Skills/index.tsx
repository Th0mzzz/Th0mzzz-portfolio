'use client'
import { useRef, useState, useEffect } from "react";
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
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
    const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({})

    const skillsType = [...new Set(skills.map(skill => skill.type))]

    const filteredSkills = selectedTab === "All" 
        ? skills 
        : skills.filter(skill => skill.type === selectedTab)

    useEffect(() => {
        const activeTab = tabsRef.current[selectedTab]
        if (activeTab) {
            setIndicatorStyle({
                left: activeTab.offsetLeft,
                width: activeTab.offsetWidth
            })
        }
    }, [selectedTab])


        return (
            <>
                <section
                    id={"skills"}
                    className={"relative overflow-hidden py-20 px-4 bg-[var(--foreground)] z-100"}
                >
                    <div className="section">
                        <Title text={"Skills"} />
                        <div className="relative flex items-center my-12 overflow-x-auto">
                            <TabSection
                                ref={(el) => { tabsRef.current['All'] = el }}
                                text={"All"}
                                active={selectedTab === 'All'}
                                onClick={() => setSelectedTab("All")}
                            />

                            {
                                skillsType.map((type, index) => (
                                    <TabSection
                                        key={index}
                                        ref={(el) => { tabsRef.current[type] = el }}
                                        text={type.charAt(0).toUpperCase() + type.slice(1)}
                                        active={selectedTab === type}
                                        onClick={() => setSelectedTab(type)}
                                    />
                                ))
                            }

                            {/* Indicador animado */}
                            <div
                                className="absolute bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-out"
                                style={{
                                    left: `${indicatorStyle.left}px`,
                                    width: `${indicatorStyle.width}px`
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 justify-center md:justify-start">
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