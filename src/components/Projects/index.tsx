"use client"
import React, {useEffect, useRef, useState} from 'react'
import {AnimatePresence, motion} from "framer-motion";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import Title from "@/components/Title";
import TabSection from "@/components/Tab";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import {categories, projects} from "./data";
import {Project, ProjectCategory} from "./types";

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});
    const carouselRef = useRef<HTMLDivElement>(null);


    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter(project => project.category === selectedCategory);


    useEffect(() => {
        const activeTab = tabsRef.current[selectedCategory];
        if (activeTab) {
            setIndicatorStyle({
                left: activeTab.offsetLeft,
                width: activeTab.offsetWidth
            });
        }
    }, [selectedCategory]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, [filteredProjects]);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const cardWidth = 360; // Largura aproximada do card
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id={"projects"} className="relative py-20 bg-[var(--foreground)] z-100 overflow-hidden">

            <div className="section">
                <Title text={"Projects"} />


                <motion.p
                    className="text text-gray-600 max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Some projects that i&apos;ve worked on, showcasing my skills and experience in various areas of software development. Each project is briefly described with links to code repositories and live demos.
                </motion.p>

                <div className="relative flex items-center mb-10 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <TabSection
                            key={category.key}
                            ref={(el) => {
                                tabsRef.current[category.key] = el;
                            }}
                            text={category.label}
                            active={selectedCategory === category.key}
                            onClick={() => setSelectedCategory(category.key as ProjectCategory)}
                        />
                    ))}


                    <motion.div
                        className="absolute bottom-0 h-0.5 bg-[var(--primary)]"
                        initial={false}
                        animate={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                </div>

                <div className="relative lg:hidden">

                    <AnimatePresence>
                        {canScrollLeft && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => scroll('left')}
                                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--foreground)] shadow-lg rounded-full flex items-center justify-center hover:bg-[var(--background)] transition-colors"
                            >
                                <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.button>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {canScrollRight && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => scroll('right')}
                                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--foreground)] shadow-lg rounded-full flex items-center justify-center hover:bg-[var(--background)] transition-colors"
                            >
                                <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.button>
                        )}
                    </AnimatePresence>

                    <div
                        ref={carouselRef}
                        onScroll={checkScrollability}
                        className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-1"
                    >
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <ProjectCard
                                        project={project}
                                        onOpenModal={handleOpenModal}
                                        index={index}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-2 mt-6">
                        {filteredProjects.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-gray-300"
                            />
                        ))}
                    </div>
                </div>

                <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpenModal={handleOpenModal}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                <motion.div
                    className="flex items-center justify-center gap-2 mt-10 text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-2xl font-bold text-[var(--primary)]">
                        {filteredProjects.length}
                    </span>
                    <span className="text-gray-500">
                        {filteredProjects.length === 1 ? 'projeto' : 'projetos'}
                        {selectedCategory !== 'all' && ` em ${selectedCategory}`}
                    </span>
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}

export default Projects
