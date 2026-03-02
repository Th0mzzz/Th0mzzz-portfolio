'use client';
import {motion, AnimatePresence} from "framer-motion";
import {FiX, FiGithub, FiExternalLink} from "react-icons/fi";
import {Project, TechStack} from "./types";
import Circle from "@/components/Circle";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({project, isOpen, onClose}: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>

                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={onClose}
                    />


                    <motion.div
                        className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <motion.div
                            className="relative bg-[var(--foreground)] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
                            initial={{scale: 0.9, y: 20}}
                            animate={{scale: 1, y: 0}}
                            exit={{scale: 0.9, y: 20}}
                            transition={{type: "spring", damping: 25, stiffness: 300}}
                            onClick={(e) => e.stopPropagation()}
                        >

                            <div
                                className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-3xl pointer-events-none">
                                <Circle size={60} color="var(--primary)" top="-20px" right="-20px" opacity={0.15}
                                        delay={0}/>
                                <Circle size={40} color="var(--primary)" top="30px" right="40px" opacity={0.1}
                                        delay={0.5}/>
                            </div>


                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-[var(--background)] rounded-full transition-colors z-10"
                            >
                                <FiX className="w-6 h-6"/>
                            </button>


                            <div className="p-8">

                                {project.image && (
                                    <motion.div
                                        className="relative w-full h-48 sm:h-64 mb-6 rounded-2xl overflow-hidden"
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{delay: 0.1}}
                                    >
                                        <img
                                            src={project.image}
                                            alt={`Preview do projeto ${project.title}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
                                    </motion.div>
                                )}

                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-sm font-bold text-[var(--primary)]">
                                                {project.year}
                                            </span>
                                            <span
                                                className="text-xs px-3 py-1 bg-[var(--background)] rounded-full uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                            {project.featured && (
                                                <span
                                                    className="text-xs px-3 py-1 bg-[var(--primary)] text-white rounded-full">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="supertitle">{project.title}</h2>
                                    </div>
                                </div>


                                <motion.blockquote
                                    className="relative bg-[var(--background)] p-6 rounded-2xl mb-8"
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 0.2}}
                                >
                                    <div className="absolute left-6 top-0 transform -translate-y-1/2">
                                        <span className="text-5xl text-[var(--primary)] font-serif">&ldquo;</span>
                                    </div>
                                    <p className="subtitle italic text-gray-600 pt-2">
                                        {project.quote}
                                    </p>
                                </motion.blockquote>


                                <div className="mb-8">
                                    <h3 className="title text-lg mb-3">Sobre o Projeto</h3>
                                    <p className="text leading-relaxed text-gray-700">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="title text-lg mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.techStack.map((tech: TechStack, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                className="flex items-center gap-2 px-4 py-2 bg-[var(--background)] rounded-xl cursor-pointer"
                                                initial={{opacity: 0, scale: 0.8}}
                                                animate={{opacity: 1, scale: 1}}
                                                transition={{delay: 0.3 + idx * 0.05}}
                                                whileHover={{scale: 1.05}}
                                            >
                                                <tech.icon className="w-5 h-5"/>
                                                <span className="text font-medium">{tech.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>


                                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-xl link hover:opacity-90 transition-opacity"
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                        >
                                            <FiGithub className="w-5 h-5"/>
                                            Ver no GitHub
                                        </motion.a>
                                    )}
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-xl link hover:bg-[var(--primary-hover)] transition-colors"
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                        >
                                            <FiExternalLink className="w-5 h-5"/>
                                            Ver Projeto
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

