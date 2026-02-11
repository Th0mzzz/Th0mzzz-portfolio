import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Script from "next/script";
import AnimatedBackground from "@/components/animateBackground";
import Header from "@/components/Header";
import GlobalContextProvider from "@/context/global";

export const metadata: Metadata = {
    title: "Th0mzzz",
    description: "Eu sou Thomaz, um desenvolvedor Full Stack apaixonado por tecnologia e inovação e esse é meu portifólio profissional.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <head>
                <Script id="theme-init" strategy="beforeInteractive">
                    {`(function(){
                    try {
                        var t = localStorage.getItem('theme');
                        if (t === 'dark' || t === 'light') {
                        document.documentElement.setAttribute('data-theme', t);
                        }
                    } catch (e) {}
                    })();
                `}
                </Script>
            </head>
            <body
                suppressHydrationWarning
                className={`antialiased`}
            >
                <GlobalContextProvider>
                    <AnimatedBackground />
                    <Header />
                    {children}
                </GlobalContextProvider>
            </body>
        </html>
    );
}
