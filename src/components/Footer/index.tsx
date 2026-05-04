"use client";

import DecorativeCircles from "../DecorativeCircles";
import {useTranslations} from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <>
            <footer className="relative isolate h-20 pt-30 pb-8 overflow-hidden">
                <p className="text text-center">{t("copyright", {year: new Date().getFullYear()})}</p>
                
            </footer>
        </>
    )
}