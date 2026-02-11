'use client';
import logoDark from "@/assets/th0mzzz-logo-dark.png";
import logoLight from "@/assets/th0mzzz-logo.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div id="home" className="flex items-center justify-center">
            <Image 
                src={resolvedTheme === "dark" ? logoDark : logoLight} 
                alt="Logo do Th0mzzz" 
                className="max-w- w-full h-auto object-cover" 
                priority
            />
        </div>
    )
}