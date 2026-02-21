'use client';
import { motion } from 'framer-motion';

interface CircleProps {
    size: number;
    color: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
    opacity?: number;
    delay?: number;
}

export default function Circle({size, color, top, right, left, bottom, opacity = 0.8, delay = 0}: CircleProps) {
    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                top,
                right,
                left,
                bottom,
                opacity,
            }}
            animate={{
                y: [0, -15, 0],
                x: [0, 8, 0],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        />
    );
}