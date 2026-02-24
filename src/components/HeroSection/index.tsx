'use client';
import logo from "@/assets/th0mzzz-logo-sm.png";
import {motion} from "motion/react";
import Image from "next/image";
import {HiArrowDown} from "react-icons/hi";

export default function HeroSection() {


    return (
        <div
             className="flex items-center justify-center flex-col gap-3 md:gap-4 mt-30 lg:mt-50  lg:mb-40 px-4 relative z-10 ">
            <motion.h1
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.7, ease: 'easeOut'}}
                className="font-gliker text-6xl md:text-8xl lg:text-[100px] text-center 
            flex items-center relative -z-50 w-fit
             transition-all duration-300"
            >
                <motion.span
                    initial={{textShadow: "0 0 0px var(--text)"}}
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
                        w-[16vw] max-w-[180px] object-cover
                        absolute top-1/2 transform  
                        left-1/4
                        lg:left-1/4 lg:-translate-x-1/8
                        -translate-y-1/2"

                    initial={{rotate: 0}}
                    animate={{rotate: 360}}
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
                    initial={{textShadow: "0 0 0px var(--text)"}}
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

            <a
                href={"#about"}
                className="flex flex-col items-center justify-center gap-5 mt-50 cursor-pointer relative mb-[400px]"
            >
                <span className="link md:text-base">Scroll Down</span>
                <span className="animate-bounce text-3xl"><HiArrowDown size={35}/></span>
            </a>

        </div>
    )
}