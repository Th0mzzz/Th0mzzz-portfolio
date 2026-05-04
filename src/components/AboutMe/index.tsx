'use client';
import React from 'react'
import Title from "@/components/Title";
import Button from "@/components/Button";
import Image from "next/image";
import foto from "@/assets/img/foto.png";
import {motion} from 'framer-motion';
import DecorativeCircles from "@/components/DecorativeCircles";
import BubbleHover from "@/components/BubbleHover";
import {useTranslations} from "next-intl";
import {scrollToHash} from "@/lib/smoothScroll";

export default function AboutMe() {
    const t = useTranslations("about");

    return (
        <>
            <section
                id={"about"}
                className={"relative overflow-hidden pt-50 px-4"}
            >
                <div className="section flex flex-col lg:flex-row items-end gap-10 justify-between">

                    <motion.div
                        initial={{transform: "translateY(40%)", opacity: 0}}
                        whileInView={{transform: "translateY(0%)", opacity: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        className="flex flex-col gap-4 py-4 max-w-[700px]">
                        <Title text={t("title")}/>

                        <h3 className={"supertitle"}>{t("greeting")}</h3>
                        <p className="text my-4 ">
                            {t.rich("paragraph1", {
                                strong: (chunks) => <strong>{chunks}</strong>,
                            })}
                            <br/>
                            <br/>
                            {t.rich("paragraph2", {
                                strong: (chunks) => <strong>{chunks}</strong>,
                            })}
                        </p>
                        <div className="flex gap-2 flex-col sm:flex-row">
                            <Button width={"100%"} margin={"0 auto"} onClick={() => {
                                scrollToHash("#contact");
                            }}
                            >
                                {t("buttons.contact")}
                            </Button>
                            <Button width={"100%"} margin={"0 auto"}>
                                {t("buttons.downloadCv")}
                            </Button>
                        </div>
                        <div className="flex gap-2 flex-col lg:flex-row mt-10">
                            <BubbleHover width={"100%"}>
                                <h4 className="link">{t("traits.proactivity.title")}</h4>
                                <p className="text mt-2">{t("traits.proactivity.description")}</p>
                            </BubbleHover>
                            <BubbleHover width={"100%"}>
                                <h4 className="link">{t("traits.teamwork.title")}</h4>
                                <p className="text mt-2">{t("traits.teamwork.description")}</p>
                            </BubbleHover>
                            <BubbleHover width={"100%"}>
                                <h4 className="link">{t("traits.leadership.title")}</h4>
                                <p className="text mt-2">{t("traits.leadership.description")}</p>
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
                               alt={t("profileAlt")}
                               style={{
                                   width: "100%",
                                   filter: "drop-shadow(2px 2px 0 10px var(--text)) "
                               }}
                        />
                    </motion.div>
                </div>
                <DecorativeCircles position={"bottom-right"}/>
            </section>

        </>

    )
}
