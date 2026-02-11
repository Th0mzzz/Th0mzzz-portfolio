import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import AnimatedBackground from "@/components/animateBackground";
import Header from "@/components/Header";
import GlobalContextProvider from "@/context/global";
import { gliker } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "Th0mzzz",
    description: "Eu sou Thomaz, um desenvolvedor Full Stack apaixonado por tecnologia e inovação e esse é meu portifólio profissional.",
    icons: {
        icon: '/th0mzzz-logo-sm.png',
        shortcut: '/th0mzzz-logo-sm.png',
        apple: '/th0mzzz-logo-sm.png',
    },
    
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            
            <body suppressHydrationWarning className={`antialiased ${gliker.variable}`}>
                <GlobalContextProvider>
                    <AnimatedBackground />
                    <Header />
                    {children}
                </GlobalContextProvider>
            </body>
        </html>
    );
}
