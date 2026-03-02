'use client'
import {useRef, useState, useEffect} from "react";
import {IconType} from "react-icons";
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
import {motion, useInView, AnimatePresence} from "framer-motion";

type SkillType = "frontend" | "backend" | "database" | "other";

interface Skill {
    name: string;
    icon: IconType;
    type: SkillType;
}

const skills: Skill[] = [
    {name: "React", icon: SiReact, type: "frontend"},
    {name: "Next.js", icon: SiNextdotjs, type: "frontend"},
    {name: "TypeScript", icon: SiTypescript, type: "frontend"},
    {name: "Tailwind CSS", icon: SiTailwindcss, type: "frontend"},
    {name: "Bootstrap", icon: SiBootstrap, type: "frontend"},
    {name: "Sass", icon: SiSass, type: "frontend"},
    {name: "Node.js", icon: SiNodedotjs, type: "backend"},
    {name: "Express", icon: SiExpress, type: "backend"},
    {name: "Fastify", icon: SiFastify, type: "backend"},
    {name: "PHP", icon: SiPhp, type: "backend"},
    {name: "MongoDB", icon: SiMongodb, type: "database"},
    {name: "MySQL", icon: SiMysql, type: "database"},
    {name: "Prisma", icon: SiPrisma, type: "database"},
    {name: "Git", icon: SiGit, type: "other"},
    {name: "Figma", icon: SiFigma, type: "other"},
];

// Variantes de animação
const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const titleVariants = {
    hidden: {opacity: 0, y: -30},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.6, ease: "easeOut" as const}
    }
};

const tabsVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5, ease: "easeOut" as const}
    }
};

const skillVariants = {
    hidden: {opacity: 0, scale: 0.8, y: 30},
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 12
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {duration: 0.2}
    }
};

export default function Skills() {
    const [selectedTab, setSelectedTab] = useState("All")
    const [iconHovered, setIconHovered] = useState<string | null>(null)
    const [indicatorStyle, setIndicatorStyle] = useState({left: 0, width: 0})
    const [hasAnimated, setHasAnimated] = useState(false)
    const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({})
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, {once: true, margin: "-100px"})

    const skillsType = [...new Set(skills.map(skill => skill.type))]

    const filteredSkills = selectedTab === "All"
        ? skills
        : skills.filter(skill => skill.type === selectedTab)

    // Marcar como animado após a primeira vez
    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true)
        }
    }, [isInView, hasAnimated])

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
                ref={sectionRef}
                id={"skills"}
                className={"relative overflow-hidden py-20 px-4 bg-[var(--foreground)] z-100"}
            >
                <motion.div
                    className="section"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Título com animação */}
                    <motion.div variants={titleVariants}>
                        <Title text={"Skills"}/>
                    </motion.div>

                    {/* Tabs com animação */}
                    <motion.div
                        className="relative flex items-center my-12 overflow-x-auto"
                        variants={tabsVariants}
                    >
                        <TabSection
                            ref={(el) => {
                                tabsRef.current['All'] = el
                            }}
                            text={"All"}
                            active={selectedTab === 'All'}
                            onClick={() => setSelectedTab("All")}
                        />

                        {
                            skillsType.map((type, index) => (
                                <TabSection
                                    key={index}
                                    ref={(el) => {
                                        tabsRef.current[type] = el
                                    }}
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
                    </motion.div>

                    {/* Grid de skills com animação em sequência */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 justify-center md:justify-start">
                        <AnimatePresence mode="popLayout">
                            {
                                filteredSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={skillVariants}
                                        initial={hasAnimated ? {opacity: 0, scale: 0.8, y: 20} : "hidden"}
                                        animate="visible"
                                        exit="exit"
                                        transition={{delay: index * 0.05}}
                                        layout
                                    >
                                        <BubbleHover
                                            width="140px"
                                            onHoverStart={() => {
                                                setIconHovered(skill.name)
                                            }}
                                            onHoverEnd={() => {
                                                setIconHovered(null)
                                            }}>
                                            <motion.div className="flex flex-col items-center gap-2"
                                                        initial={{translateY: 0}}
                                                        transition={{duration: 500}}
                                                        variants={{hovered: {translateY: -10}, initial: {translateY: 0}}}
                                            >
                                                <motion.div animate={iconHovered === skill.name ? "hovered" : "initial"}
                                                            variants={{
                                                                hovered: {scale: 1.2},
                                                                initial: {scale: 1}
                                                            }} transition={{duration: 0.3, ease: "easeInOut"}}>
                                                    <skill.icon className="text-6xl fill-current"/>
                                                </motion.div>
                                                <span className="link">{skill.name}</span>
                                            </motion.div>
                                        </BubbleHover>
                                    </motion.div>
                                ))
                            }
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
