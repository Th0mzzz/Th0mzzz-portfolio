import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import AnimatedBackground from "@/components/animateBackground";
import Header from "@/components/Header";
import GlobalContextProvider from "@/context/global";
import {gliker} from "@/lib/fonts";
import SmoothScrollInit from "@/components/SmoothScrollInit";
import ScrollToTop from "@/components/ScrollToTop";
import DecorativeCircles from "@/components/DecorativeCircles";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages, getTranslations} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("metadata");

    return {
        title: t("title"),
        description: t("description"),
        icons: {
            icon: "/th0mzzz-logo-sm.png",
            shortcut: "/th0mzzz-logo-sm.png",
            apple: "/th0mzzz-logo-sm.png",
        },
    };
}


export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning id="home" className="overflow-x-clip">

        <body suppressHydrationWarning className={`antialiased ${gliker.variable} overflow-x-clip`}>
        <NextIntlClientProvider messages={messages}>
            <GlobalContextProvider>
                <div className="relative w-full overflow-x-clip">
                    <SmoothScrollInit/>
                    <AnimatedBackground/>
                    <Header/>
                    <ScrollToTop/>
                    <DecorativeCircles position="top-right"/>
                    {children}
                </div>
            </GlobalContextProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
