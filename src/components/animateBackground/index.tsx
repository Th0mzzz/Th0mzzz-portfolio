'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from "react";

const generateDots = (count: number) =>
    Array.from({length: count}, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 3
    }));

type Dot = ReturnType<typeof generateDots>[number];

function DotParticle({ dot, mouseX, mouseY }: { dot: Dot; mouseX: ReturnType<typeof useMotionValue<number>>; mouseY: ReturnType<typeof useMotionValue<number>> }) {
    const radiusPct = 18;
    const maxOffsetPx = 22;

    const offsetX = useTransform([mouseX, mouseY], (latest) => {
        const [mx, my] = latest as [number, number];
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.hypot(dx, dy);
        if (!Number.isFinite(dist) || dist === 0 || dist > radiusPct) return 0;
        const force = (1 - dist / radiusPct) * maxOffsetPx;
        return (dx / dist) * force;
    });

    const offsetY = useTransform([mouseX, mouseY], (latest) => {
        const [mx, my] = latest as [number, number];
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.hypot(dx, dy);
        if (!Number.isFinite(dist) || dist === 0 || dist > radiusPct) return 0;
        const force = (1 - dist / radiusPct) * maxOffsetPx;
        return (dy / dist) * force;
    });

    const xSpring = useSpring(offsetX, { stiffness: 180, damping: 22, mass: 0.3 });
    const ySpring = useSpring(offsetY, { stiffness: 180, damping: 22, mass: 0.3 });

    return (
        <motion.div
            className="absolute pointer-events-none"
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
        >
            <motion.div
                className="h-full w-full rounded-full bg-[var(--primary)] opacity-25"
                style={{ x: xSpring, y: ySpring }}
            />
        </motion.div>
    );
}

export default function AnimatedBackground() {
    const [dots, setDots] = useState<ReturnType<typeof generateDots>>([]);

    const mouseXPct = useMotionValue(-1000);
    const mouseYPct = useMotionValue(-1000);

    const handlers = useMemo(() => {
        return {
            onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                mouseXPct.set(x);
                mouseYPct.set(y);
            },
            onMouseLeave: () => {
                mouseXPct.set(-1000);
                mouseYPct.set(-1000);
            },
        };
    }, [mouseXPct, mouseYPct]);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setDots(generateDots(500));
        });
        return () => cancelAnimationFrame(raf);
    }, []);
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden" onMouseMove={handlers.onMouseMove} onMouseLeave={handlers.onMouseLeave}>
            {dots.map((dot) => (
                <DotParticle key={dot.id} dot={dot} mouseX={mouseXPct} mouseY={mouseYPct} />
            ))}
        </div>
    );
}
