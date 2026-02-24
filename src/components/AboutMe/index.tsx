'use client';
import React from 'react'
import Title from "@/components/Title";
import Button from "@/components/Button";
import Image from "next/image";
import foto from "@/assets/img/foto.png";
import {motion} from 'framer-motion';
import DecorativeCircles from "@/components/DecorativeCircles";
import BubbleHover from "@/components/BubbleHover";

export default function AboutMe() {
    return (
        <>
            <section
                id={"about"}
                className={"relative overflow-hidden py-20 px-4"}
            >
                <Title text={"About Me"}/>
                <div className="section flex flex-col lg:flex-row items-end gap-10 justify-between">

                    <motion.div
                        initial={{transform: "translateY(40%)", opacity: 0}}
                        whileInView={{transform: "translateY(0%)", opacity: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        className="flex flex-col gap-4 py-4 max-w-[700px]">

                        <h3 className={"supertitle"}>Hi, I&apos;m Thomaz!</h3>
                        <p className="text my-4 ">
                            I develop solutions that span
                            both <strong>frontend</strong> and <strong>backend</strong> using
                            mainly <strong>JavaScript</strong>, with a
                            focus on <strong>creating and integrating APIs</strong> and working with <strong>complex
                            data structures</strong>.
                            <br/>
                            <br/>
                            I build designs that are <strong>simple</strong>, <strong>accessible</strong>, and
                            guided by
                            solid <strong>UI/UX</strong> principles to improve
                            how people interact with systems. I’ve worked on projects
                            that <strong>simplify</strong> and <strong>automate workflows</strong>, <strong>digitalizing
                            processes</strong> and <strong> helping teams work more efficiently</strong>
                        </p>
                        <div className="flex gap-2 flex-col sm:flex-row">
                            <Button width={"100%"} margin={"0 auto"} onClick={() => {
                                const contactSection = document.querySelector("#contact");
                                if (contactSection) {
                                    const top = contactSection.getBoundingClientRect().top + window.pageYOffset;
                                    window.scrollTo({top});

                                }
                            }}
                            >
                                Get in touch
                            </Button>
                            <Button width={"100%"} margin={"0 auto"}>
                                Download CV
                            </Button>
                        </div>
                        <div className="flex gap-2 flex-col xl:flex-row mt-20">
                            <BubbleHover width={"100%"}>
                                <h4 className="link">Pro-activity</h4>
                                <p className="text mt-2">I always work hard to be proactive, seeking out errors, finding
                                    new
                                    solutions to problems and organizing workflows.</p>
                            </BubbleHover>
                            <BubbleHover width={"100%"}>
                                <h4 className="link">Team Work</h4>
                                <p className="text mt-2">I’m good making new connections and keeping the workspace more
                                    positive and efficient.</p>
                            </BubbleHover>
                            <BubbleHover width={"100%"}>
                                <h4 className="link">Leadership</h4>
                                <p className="text mt-2">I always try to help my co-workers and organize projects and
                                    ideas.</p>
                            </BubbleHover>
                        </div>
                    </motion.div>
                    <motion.div
                        style={{maxWidth: "500px", minWidth: "300px", width: "100%"}}
                        initial={{transform: "translateY(40%)", opacity: 0}}
                        whileInView={{transform: "translateY(0%)", opacity: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                    >
                        <Image src={foto}
                               alt={"Homem jovem branco com cabelos cacheados e barba curta castanhos claros, com camisa verde xadrez com camiseta branca por baixo e pingente de sol dourado "}
                               style={{
                                   width: "100%",
                                   filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2))"
                               }}
                        />
                    </motion.div>
                </div>
                <DecorativeCircles position={"bottom-right"}/>
            </section>

        </>

    )
}
