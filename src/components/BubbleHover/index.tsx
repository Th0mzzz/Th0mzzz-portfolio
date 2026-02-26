'use client'
import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

interface BubbleHoverProps {
    children: React.ReactNode,
    width?: string,
    onHoverStart?: () => void,
    onHoverEnd?: () => void
}

interface Bubble {
    id: string;
    left: string;
    size: number;
    duration: number;
}

function BubbleHover({children, width = "fit-content", onHoverStart, onHoverEnd}: BubbleHoverProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
        if (!isHovered) {
            return;
        }


        const createBubble = () => {
            const newBubble: Bubble = {
                id: `${Date.now()}-${Math.random()}`,
                left: `${Math.random() * 100}%`,
                size: Math.random() * 12 + 20,
                duration: Math.random() + 3,
            };
            setBubbles(prev => [...prev, newBubble]);


            setTimeout(() => {
                setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
            }, (newBubble.duration + 0.5) * 1000);
        };


        for (let i = 0; i < 5; i++) {
            setTimeout(createBubble, i * 100);
        }

        const interval = setInterval(createBubble, 200);

        return () => {
            clearInterval(interval);
        };
    }, [isHovered]);

    useEffect(() => {
        if (!isHovered) {
            const timer = setTimeout(() => setBubbles([]), 0);
            return () => clearTimeout(timer);
        }
    }, [isHovered]);

    const variants = {
        initial: {
            backgroundColor: "rgba(255, 49, 49, 0)",
            borderColor: "var(--border)",
            color: "var(--text)",
            fill: "var(--text)"
        },
        hovered: {
            backgroundColor: "var(--primary)",
            borderColor: "var(--primary)",
            color: "var(--foreground)",
            fill: "var(--foreground)"
        },
    };

    return (
        <motion.div
            className="relative px-6 py-3 rounded-lg cursor-pointer overflow-visible [&_svg]:fill-current [&_svg]:text-current [&_svg_*]:fill-current"
            style={{width}}
            onHoverStart={() => {
                if(onHoverStart) onHoverStart()
                setIsHovered(true)
            }}
            onHoverEnd={() => {
                if(onHoverEnd) onHoverEnd()
                setIsHovered(false)
            }}
            animate={isHovered ? "hovered" : "initial"}
            variants={variants}
            transition={{duration: 0.5, ease: "easeInOut"}}
        >
            <AnimatePresence>
                {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            backgroundColor: "var(--primary)",
                            left: bubble.left,
                            top: "0",
                            translateX: "-50%",
                        }}
                        initial={{
                            y: 0,
                            opacity: 1,
                            scale: 0.3,
                        }}
                        animate={{
                            y: -50,
                            opacity: 0,
                            scale: 1.2,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0
                        }}
                        transition={{
                            duration: bubble.duration,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </AnimatePresence>

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

export default BubbleHover
