'use client';
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "@/components/Title";
import TabSection from "@/components/Tab";
import TimelineCard from "./TimelineCard";
import { journeyItems, journeyTabs } from "./data";
import { JourneyCategory } from "./types";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.25 },
    },
};

export default function MyJourney() {
    const [selectedCategory, setSelectedCategory] = useState<JourneyCategory>("all");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    const filteredItems =
        selectedCategory === "all"
            ? journeyItems
            : journeyItems.filter((item) => item.category === selectedCategory);

    useEffect(() => {
        const activeTab = tabsRef.current[selectedCategory];
        if (activeTab) {
            setIndicatorStyle({
                left: activeTab.offsetLeft,
                width: activeTab.offsetWidth,
            });
        }
    }, [selectedCategory]);

    return (
        <section id="journey" className="relative py-20 px-4">
            <div className="section">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Title text="My Journey" />
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text text-gray-500 max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    A timeline of my professional experience and academic background, showcasing
                    the milestones that have shaped my career in software development.
                </motion.p>

                {/* Tabs */}
                <motion.div
                    className="relative flex items-center mb-12 overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {journeyTabs.map((tab) => (
                        <TabSection
                            key={tab.key}
                            ref={(el) => {
                                tabsRef.current[tab.key] = el;
                            }}
                            text={tab.label}
                            active={selectedCategory === tab.key}
                            onClick={() => setSelectedCategory(tab.key)}
                        />
                    ))}

                    {/* Sliding indicator */}
                    <div
                        className="absolute bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-out"
                        style={{
                            left: `${indicatorStyle.left}px`,
                            width: `${indicatorStyle.width}px`,
                        }}
                    />
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {filteredItems.map((item, index) => (
                                <motion.div key={item.id} variants={itemVariants}>
                                    <TimelineCard item={item} index={index} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

