"use client";

import DecorativeCircles from "../DecorativeCircles";
import {useTranslations} from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <>
            <footer className="relative h-20 pt-30 pb-8">
                <p className="text text-center">{t("copyright", {year: new Date().getFullYear()})}</p>
                <div className="absolute bottom-[-550px] left-1/2 transform -translate-x-1/2 -z-1">
                    <DecorativeCircles position="bottom-center" multip={1.1} />
                </div>
            </footer>
        </>
    )
}