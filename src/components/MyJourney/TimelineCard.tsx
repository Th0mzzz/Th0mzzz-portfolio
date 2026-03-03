'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiChevronDown, FiBriefcase, FiBookOpen } from "react-icons/fi";
import { JourneyItem } from "./types";

interface TimelineCardProps {
    item: JourneyItem;
    index: number;
}

export default function TimelineCard({ item, index }: TimelineCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const isWork = item.category === "work";
    const CategoryIcon = isWork ? FiBriefcase : FiBookOpen;

    return (
        <motion.div
            className="relative flex gap-4 md:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
        >
            {/* Timeline line & dot */}
            <div className="flex flex-col items-center flex-shrink-0">
                <motion.div
                    className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center z-10 shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <CategoryIcon className="w-4 h-4 text-white" />
                </motion.div>
                <div className="w-0.5 flex-1 bg-gradient-to-b from-[var(--primary)] to-transparent min-h-[20px]" />
            </div>

            {/* Card */}
            <motion.div
                className="flex-1 mb-6 bg-[var(--foreground)] rounded-2xl border border-gray-200/30 shadow-sm overflow-hidden cursor-pointer"
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Header */}
                <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                            <h3 className="link font-bold text-[var(--text)]">
                                {item.title}
                            </h3>
                        </div>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 mt-1"
                        >
                            <FiChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                    </div>

                    {/* Organization & Date row */}
                    <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                            {item.organizationLogo ? (
                                <Image
                                    src={item.organizationLogo}
                                    alt={item.organization}
                                    width={28}
                                    height={28}
                                    className="w-7 h-7 rounded-full object-cover border border-gray-200/50"
                                />
                            ) : (
                                <div className="w-7 h-7 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                                    <CategoryIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
                                </div>
                            )}
                            <span className="text text-gray-500 font-medium">
                                {item.organization}
                            </span>
                        </div>
                        <span className="text text-gray-400 font-medium whitespace-nowrap">
                            {item.startDate} → {item.endDate === "Now" ? (
                                <span className="text-[var(--primary)] font-semibold">Now</span>
                            ) : item.endDate}
                        </span>
                    </div>
                </div>

                {/* Collapsible description */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="px-5 pb-5">
                                <div className="border-t border-gray-200/30 pt-4">
                                    <p className="text text-gray-500 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {item.skills && item.skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {item.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text text-xs px-3 py-1 bg-[var(--background)] rounded-full font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

