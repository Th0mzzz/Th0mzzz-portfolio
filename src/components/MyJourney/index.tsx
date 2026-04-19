'use client';
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "@/components/Title";
import TabSection from "@/components/Tab";
import TimelineCard from "./TimelineCard";
import {journeyItemBase, journeyTabKeys} from "./data";
import {JourneyCategory, JourneyItem} from "./types";
import {useTranslations} from "next-intl";

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
    const t = useTranslations("journey");
    const [selectedCategory, setSelectedCategory] = useState<JourneyCategory>("all");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    const journeyTabs = journeyTabKeys.map((key) => ({
        key,
        label: t(`tabs.${key}`),
    }));

    const journeyItems: JourneyItem[] = journeyItemBase.map((item) => ({
        ...item,
        title: t(`items.${item.id}.title`),
        organization: t(`items.${item.id}.organization`),
        description: t(`items.${item.id}.description`),
        endDate: item.isCurrent ? t("now") : item.endDate,
    }));

    const filteredItems =
        selectedCategory === "all"
            ? journeyItems
            : journeyItems.filter((item) => item.category === selectedCategory);
    
    const parseMonthYear = (str: string) => {
        if (!str) return 0;
        const parts = str.split('/').map(s => parseInt(s, 10));
        if (parts.length !== 2) return 0;
        const [month, year] = parts;
        if (isNaN(month) || isNaN(year)) return 0;
        return year * 100 + month;
    };

    const sortedItems = filteredItems.slice().sort((a, b) => {
        return parseMonthYear(b.startDate) - parseMonthYear(a.startDate);
    });

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
                         <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                            <Title text={t("title")} />
                </motion.div>

                  <motion.p
                    className="text text-gray-500 max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {t("description")}
                </motion.p>


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


                    <div
                        className="absolute bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-out"
                        style={{
                            left: `${indicatorStyle.left}px`,
                            width: `${indicatorStyle.width}px`,
                        }}
                    />
                </motion.div>


                <div className="relative max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {sortedItems.map((item, index) => (
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
