'use client';
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { Project, TechStack } from "./types";

interface ProjectCardProps {
    project: Project;
    onOpenModal: (project: Project) => void;
    index: number;
}

export default function ProjectCard({ project, onOpenModal, index }: ProjectCardProps) {
    return (
        <motion.article
            className="group relative bg-[var(--background)] rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => onOpenModal(project)}
        >
            {project.image ? (
                <div className="relative w-full h-40 overflow-hidden">
                    <img
                        src={project.image}
                        alt={`Preview do projeto ${project.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-black/40" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="text bg-[var(--foreground)]/90 backdrop-blur-sm text-[var(--primary)] font-semibold px-3 py-1 rounded-full text-xs">
                            {project.year}
                        </span>
                        <span className="text bg-[var(--foreground)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>
                </div>
            ) : (

                <div className="flex items-center justify-between p-5 pb-0">
                    <span className="text text-[var(--primary)] font-semibold">
                        {project.year}
                    </span>
                    <span className="text px-3 py-1 bg-[var(--foreground)] rounded-full text-xs uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
            )}

            <div className="p-5 flex-1 flex flex-col">
                <h3 className="subtitle font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {project.title}
                </h3>

                <p className="text text-gray-600 mb-4 line-clamp-3 flex-1">
                    {project.description}
                </p>


                <blockquote className="text text-xs italic text-gray-500 border-l-2 border-[var(--primary)] pl-3 mb-4">
                    &ldquo;{project.quote}&rdquo;
                </blockquote>


                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech: TechStack, idx: number) => (
                        <div
                            key={idx}
                            className="flex items-center gap-1.5 px-2 py-1 bg-[var(--foreground)] rounded-md"
                            title={tech.name}
                        >
                            <tech.icon className="w-3.5 h-3.5" />
                            <span className="text-xs">{tech.name}</span>
                        </div>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>


                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 hover:bg-[var(--foreground)] rounded-full transition-colors"
                                title="Ver no GitHub"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 hover:bg-[var(--foreground)] rounded-full transition-colors"
                                title="Ver projeto"
                            >
                                <FiExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>

                    <motion.button
                        className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:gap-3 transition-all"
                        whileHover={{ x: 3 }}
                    >
                        Ver mais <FiArrowRight />
                    </motion.button>
                </div>
            </div>


            {project.featured && (
                <div className="absolute top-4 right-4">
                    <motion.div
                        className="w-3 h-3 bg-[var(--primary)] rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            )}
        </motion.article>
    );
}

