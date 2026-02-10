'use client'

import {motion} from 'framer-motion';
import {useEffect, useState} from "react";

const generateDots = (count: number) =>
    Array.from({length: count}, (_, i) => ({
        id: i,
        size: Math.random() * 8 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5
    }));
export default function AnimatedBackground() {
    const [dots, setDots] = useState<ReturnType<typeof generateDots>>([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setDots(generateDots(100));
    }, []);
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    className="absolute rounded-full bg-[var(--primary)] opacity-30"
                    style={{
                        width: dot.size,
                        height: dot.size,
                        left: `${dot.x}%`,
                        top: `${dot.y}%`,
                    }}
                    animate={{
                        x: [0, 30, -30, 0],
                        y: [0, -30, 30, 0],
                    }}
                    transition={{
                        duration: dot.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: dot.delay,
                    }}
                />
            ))}
        </div>
    );
}
