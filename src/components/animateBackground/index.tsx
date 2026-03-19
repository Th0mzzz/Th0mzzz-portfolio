'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { memo, useEffect, useRef, useState } from "react";

const generateDots = (count: number) =>
    Array.from({length: count}, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 20,
        delay: Math.random() * 2
    }));

type Dot = ReturnType<typeof generateDots>[number];

const DotParticle = memo(function DotParticle({ dot, mouseX, mouseY }: { dot: Dot; mouseX: ReturnType<typeof useMotionValue<number>>; mouseY: ReturnType<typeof useMotionValue<number>> }) {
    const radiusPct = 20;
    const maxOffsetPx = 15;

    const offsetX = useTransform([mouseX, mouseY], (latest) => {
        const [mx, my] = latest as [number, number];
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const distSq = dx * dx + dy * dy;
        const radiusSq = radiusPct * radiusPct;
        
        if (distSq > radiusSq) return 0;
        
        const dist = Math.sqrt(distSq);
        if (dist === 0) return 0;
        
        const force = (1 - dist / radiusPct) * maxOffsetPx;
        return (dx / dist) * force;
    });

    const offsetY = useTransform([mouseX, mouseY], (latest) => {
        const [mx, my] = latest as [number, number];
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const distSq = dx * dx + dy * dy;
        const radiusSq = radiusPct * radiusPct;
        
        if (distSq > radiusSq) return 0;
        
        const dist = Math.sqrt(distSq);
        if (dist === 0) return 0;
        
        const force = (1 - dist / radiusPct) * maxOffsetPx;
        return (dy / dist) * force;
    });

    const xSpring = useSpring(offsetX, { stiffness: 150, damping: 25, mass: 0.5 });
    const ySpring = useSpring(offsetY, { stiffness: 150, damping: 25, mass: 0.5 });

    return (
        <motion.div
            className="absolute pointer-events-none will-change-transform "
            style={{
                width: dot.size,
                height: dot.size,
                left: `${dot.x}%`,
                top: `${dot.y}%`,
            }}
            animate={{
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
            }}
            transition={{
                duration: dot.duration,
                repeat: Infinity,
                ease: "linear",
                delay: dot.delay,
            }}
        >
            <motion.div
                className="h-full w-full rounded-full bg-[var(--primary)] opacity-30"
                style={{ x: xSpring, y: ySpring, willChange: 'transform' }}
            />
        </motion.div>
    );
});

export default function AnimatedBackground() {
    const [dots, setDots] = useState<ReturnType<typeof generateDots>>([]);
    const rafRef = useRef<number>(null);
    const lastTimeRef = useRef(0);

    const mouseXPct = useMotionValue(-1000);
    const mouseYPct = useMotionValue(-1000);


    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const throttle = 16;

        const handleMove = (e: MouseEvent | TouchEvent) => {
            const now = performance.now();
            if (now - lastTimeRef.current < throttle) return;
            lastTimeRef.current = now;

            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect || rect.width === 0 || rect.height === 0) return;

            let clientX: number, clientY: number;
            if (e instanceof TouchEvent) {
                if (!e.touches || e.touches.length === 0) return;
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = (e as MouseEvent).clientX;
                clientY = (e as MouseEvent).clientY;
            }

            const x = ((clientX - rect.left) / rect.width) * 100;
            const y = ((clientY - rect.top) / rect.height) * 100;
            mouseXPct.set(x);
            mouseYPct.set(y);
        };

        const handleLeave = (e: MouseEvent) => {
            if ((e as MouseEvent).relatedTarget === null) {
                mouseXPct.set(-1000);
                mouseYPct.set(-1000);
            }
        };

        window.addEventListener('mousemove', handleMove as EventListener);
        window.addEventListener('touchmove', handleMove as EventListener, { passive: true });
        window.addEventListener('mouseout', handleLeave);

        return () => {
            window.removeEventListener('mousemove', handleMove as EventListener);
            window.removeEventListener('touchmove', handleMove as EventListener);
            window.removeEventListener('mouseout', handleLeave);
        };
    }, [mouseXPct, mouseYPct]);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(() => {
            setDots(generateDots(100));
        });
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);
    return (
        <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-100 block">
            {dots.map((dot) => (
                <DotParticle key={dot.id} dot={dot} mouseX={mouseXPct} mouseY={mouseYPct} />
            ))}
        </div>
    );
}
