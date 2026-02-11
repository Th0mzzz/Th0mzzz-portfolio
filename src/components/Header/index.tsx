'use client';
import SmallLogo from "@/assets/th0mzzz-logo-sm.png";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt4, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "next-themes";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [openMenu, setOpenMenu] = useState(false);
    const navItemVariants = {
        rest: { color: "var(--text)" },
        hover: { color: "var(--primary)" },
    };

    const underlineVariants = {
        rest: { scaleX: 0, opacity: 0 },
        hover: { scaleX: 1, opacity: 1 },
    };
    const navItemTransition = { duration: 0.25, ease: "easeOut" } as const;

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <header className="w-full 
            lg:bg-gradient-to-b lg:from-[#ff313116] lg:to-transparent
            ">
                <nav className="
                relative 
                 max-w-[var(--alignment)] 
                 bg-[#ffffff16] backdrop-blur lg:bg-transparent rounded-full 
                 w-full 
                 flex items-center justify-between 
                 mx-auto mt-3 lg:mt-0 p-4 px-8
                 border border-[var(--border)] lg:border-0
                 ">
                    <Link href={"#home"} className="link">
                        <Image src={SmallLogo} alt="Logo do Th0mzzz" className="w-15" />
                    </Link>


                    <button
                        className="lg:hidden"
                        onClick={() => setOpenMenu(!openMenu)}
                        aria-label="Abrir menu"
                    >``
                        <HiOutlineMenuAlt4 size={45} className="text-[var(--text)]" />
                    </button>

                    <div className="hidden lg:flex lg:relative lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:shadow-none lg:rounded-none lg:w-fit lg:border-0">
                        <ul className="flex items-center gap-8">
                            {[
                                { href: "#home", label: "About me" },
                                { href: "#about", label: "Projects" },
                                { href: "#projects", label: "My Journey" },
                                { href: "#contact", label: "Get in Touch" },
                            ].map((item) => (
                                <li key={item.href + item.label}>
                                    <Link href={item.href} className="link">
                                        <motion.span
                                            className="relative inline-block text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                                            variants={navItemVariants}
                                            initial="rest"
                                            animate="rest"
                                            whileHover="hover"
                                            transition={navItemTransition}
                                        >
                                            {item.label}
                                            <motion.span
                                                aria-hidden="true"
                                                className="absolute left-0 -bottom-1 h-[1px] w-full rounded-full bg-[var(--primary)]"
                                                style={{ transformOrigin: "0% 50%" }}
                                                variants={underlineVariants}
                                                transition={navItemTransition}
                                            />
                                        </motion.span>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <motion.button
                                    type="button"
                                    aria-label="Alternar tema"
                                    onClick={toggleTheme}
                                    className="link text-[var(--text)] hover:!text-[var(--primary)]   rounded-full p-2 cursor-pointer"
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.5 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <HiOutlineMoon size={25} className="theme-icon theme-icon--light h-fit" aria-hidden="true" />
                                    <HiOutlineSun size={25} className="theme-icon theme-icon--dark h-fit" aria-hidden="true" />
                                </motion.button>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    <motion.div
                        className="lg:hidden fixed top-25 left-0 w-full bg-[#ffffff16] backdrop-blur-md rounded-2xl p-6 shadow-lg z-50 border border-[var(--border)]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={openMenu ? { opacity: 1, y: 20 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ display: openMenu ? 'block' : 'none' }}
                    >
                        <ul className="flex flex-col items-start gap-6">
                            {[
                                { href: "#home", label: "About me" },
                                { href: "#about", label: "Projects" },
                                { href: "#projects", label: "My Journey" },
                                { href: "#contact", label: "Get in Touch" },
                            ].map((item) => (
                                <li key={item.href + item.label}>
                                    <Link
                                        href={item.href}
                                        className="link text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-[var(--text)]/20 w-full">
                                <motion.button
                                    type="button"
                                    aria-label="Alternar tema"
                                    onClick={toggleTheme}
                                    className="link text-[var(--text)] hover:!text-[var(--primary)] rounded-full p-2 cursor-pointer"
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <HiOutlineMoon size={25} className="theme-icon theme-icon--light h-fit" aria-hidden="true" />
                                    <HiOutlineSun size={25} className="theme-icon theme-icon--dark h-fit" aria-hidden="true" />
                                </motion.button>
                            </li>
                        </ul>
                    </motion.div>
                </nav>
            </header>
        </>
    )
}