'use client';
import logo from "@/assets/th0mzzz-logo-sm.png";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {


    return (
        <div id="home" className="flex items-center justify-center flex-col gap-3 md:gap-4 mt-10 md:mt-16 lg:mt-20 mb-6 md:mb-8 lg:mb-10 px-4">
            <motion.h1
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="font-gliker text-6xl md:text-8xl lg:text-[100px] text-center 
            flex items-center relative w-fit
             transition-all duration-300"
            >
                <motion.span
                    initial={{ textShadow: "0 0 0px var(--text)" }}
                    animate={{
                        textShadow: [
                            "0 0 0px var(--text)",
                            "0 0 8px var(--text)",
                            "0 0 0px var(--text)",
                        ]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                    }}
                >
                    Th
                </motion.span>
                <span className="w-[12vw] max-w-[150px]"></span>
                <motion.div
                    className="
                        w-[13vw] max-w-[180px] object-cover 
                        absolute top-1/2 transform  
                        left-1/3 -translate-x-1/3
                        lg:left-1/4 lg:-translate-x-1/8
                        -translate-y-1/2"

                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >

                    <Image
                        src={logo}
                        alt="Desenho de uma lua vermelha"

                        priority
                    />
                </motion.div>

                <motion.span
                    initial={{ textShadow: "0 0 0px var(--text)" }}
                    animate={{
                        textShadow: [
                            "0 0 0px var(--text)",
                            "0 0 8px var(--text)",
                            "0 0 0px var(--text)",
                        ],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.5, 1],
                    }}
                >
                    mzzz
                </motion.span>
            </motion.h1>

            <h2 className="subtitle flex items-center gap-2 font-bold">
                <span className="text-[var(--primary)] text-xl sm:text-2xl md:text-3xl">{"{ "}</span>
                Web Developer
                <span className="text-[var(--primary)] text-xl sm:text-2xl md:text-3xl">{" }"}</span>
            </h2>
        </div>
    )
}