'use client'
import Image from "next/image";
import { useState } from "react";
import BubbleHover from "../BubbleHover";
import TabSection from "../Tab";
import Title from "../Title";

export default function Skills() {
    const skills = [
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            type: "frontend"
        },
        {
            name: "Next.js",
            icon: "./devicon-master/icons/nextjs.svg",
            type: "frontend"
        },
        {
            name: "TypeScript",
            icon: "./devicon-master/icons/typescript.svg",
            type: "backend"

        },
        {
            name: "Tailwind CSS",
            icon: "./devicon-master/icons/tailwind.svg",
            type: "frontend"
        },
        {
            name: "Bootstrap",
            icon: "./devicon-master/icons/bootstrap.svg",
            type: "frontend"
        },
        {
            name: "Sass",
            icon: "./devicon-master/icons/sass.svg",
            type: "frontend"
        },
        {
            name: "Node.js",
            icon: "./devicon-master/icons/nodejs.svg",
            type: "backend"
        },
        {
            name: "Express",
            icon: "./devicon-master/icons/expressjs.svg",
            type: "backend"
        },
        {
            name: "Fastify",
            icon: "./devicon-master/icons/fastify.svg",
            type: "backend"
        },
        {
            name: "PHP",
            icon: "./devicon-master/icons/php.svg",
            type: "backend"
        },
        {
            name: "MongoDB",
            icon: "./devicon-master/icons/mongodb.svg",
            type: "database"
        },
        {
            name: "MySQL",
            icon: "./devicon-master/icons/sql.svg",
            type: "database"
        },
        {
            name: "Prisma",
            icon: "./devicon-master/icons/prisma.svg",
            type: "database"
        },
        {
            name: "Git",
            icon: "./devicon-master/icons/git.svg",
            type: "other"
        },
        {
            name: "Figma",
            icon: "./devicon-master/icons/figma.svg",
            type: "other"
        },

    ]
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
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                            {
                                filteredSkills.map((skill, index) => (
                                    <BubbleHover key={index} width="100%">
                                        <Image src={skill.icon} alt={skill.name} className="object-contain" width={16} height={16}/>
                                        <span className="link">{skill.name}</span>
                                    </BubbleHover>
                                ))

                            }
                        </div>
                    </div>

                </section>
            </>
        )
    }