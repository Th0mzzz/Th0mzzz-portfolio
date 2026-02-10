import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import AnimatedBackground from "@/components/animateBackground";

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
        <html lang="pt-br">
        <body
            className={`antialiased`}
        >
        <AnimatedBackground/>
        {children}
        </body>
        </html>
    );
}
