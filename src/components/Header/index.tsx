'use client';
import SmallLogo from "@/assets/th0mzzz-logo-sm.png";
import {motion} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {HiOutlineMenuAlt4, HiOutlineMoon, HiOutlineSun} from "react-icons/hi";
import {useTheme} from "next-themes";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";
import {HiMiniXMark} from "react-icons/hi2";

export default function Header() {
    const {theme, setTheme} = useTheme();
    const [openMenu, setOpenMenu] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)
    const navItemVariants = {
        rest: {color: "var(--text)"},
        hover: {color: "var(--primary)"},
    };

    const underlineVariants = {
        rest: {scaleX: 0, opacity: 0},
        hover: {scaleX: 1, opacity: 1},
    };
    const navItemTransition = {duration: 0.25, ease: "easeOut"} as const;

    const socialRotateVariants = {
        rest: {rotate: 0},
        hover: {
            rotate: [10, -10, 10, -10, 10, -10, 0] as number[],
            transition: {duration: 1, repeat: Infinity, easing: [0.25, 0.1, 0.25, 1]},
        },
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (!openMenu) return;

                const target = event.target as HTMLElement;
                const clickedInsideMenu = mobileMenuRef.current?.contains(target);
                const clickedMenuButton = mobileMenuButtonRef.current?.contains(target);

                console.log("Clicou em:", target);
                console.log("Menu ref:", mobileMenuRef.current);
                console.log("Dentro do menu?", clickedInsideMenu);
                console.log("Dentro do botão?", clickedMenuButton);

                if (!clickedInsideMenu && !clickedMenuButton) {
                    console.log("Fechando menu");
                    setOpenMenu(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
        , [openMenu]);

    return (
        <>
            <header className="w-full 
            lg:bg-gradient-to-b lg:from-[#ff313116] lg:to-transparent z-20 relative
            ">
                <nav className="
                relative 
                 max-w-[var(--alignment)] 
                 bg-[var(--border)]/60 backdrop-blur lg:bg-transparent rounded-full lg:backdrop-blur-none
                 w-full 
                 flex items-center justify-between 
                 mx-auto mt-3 lg:mt-0 p-4 px-8
                 border border-[var(--border)] lg:border-0
                 ">
                    <Link href={"#home"} className="link">
                        <Image src={SmallLogo} alt="Logo do Th0mzzz" className="w-15"/>
                    </Link>


                    <button
                        ref={mobileMenuButtonRef}
                        className="lg:hidden"
                        onClick={() => setOpenMenu(!openMenu)}
                        aria-label="Abrir menu"
                    >
                        {openMenu ? <HiMiniXMark size={45} className="text-[var(--background)]"/>

                            : <HiOutlineMenuAlt4 size={45} className="text-[var(--background)]"/>
                        }
                    </button>

                    <div
                        className="hidden lg:flex lg:relative lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:shadow-none lg:rounded-none lg:w-fit lg:border-0">
                        <ul className="flex items-center gap-8">
                            {[
                                {href: "#about", label: "About me"},
                                {href: "#skills", label: "Skills"},
                                {href: "#projects", label: "Projects"},
                                {href: "#journey", label: "My Journey"},
                                {href: "#contact", label: "Get in Touch"},
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
                                                style={{transformOrigin: "0% 50%"}}
                                                variants={underlineVariants}
                                                transition={navItemTransition}
                                            />
                                        </motion.span>
                                    </Link>
                                </li>
                            ))}
                            <li className={"flex items-center gap-3"}>
                                <motion.button
                                    type="button"
                                    aria-label="Alternar tema"
                                    onClick={toggleTheme}
                                    className="link text-[var(--text)] hover:!text-[var(--primary)]   rounded-full p-2 cursor-pointer"
                                    whileHover={{rotate: 90}}
                                    whileTap={{scale: 0.5}}
                                    transition={{duration: 0.4, ease: "easeOut"}}
                                >
                                    <HiOutlineMoon size={25} className="theme-icon theme-icon--light h-fit"
                                                   aria-hidden="true"/>
                                    <HiOutlineSun size={25} className="theme-icon theme-icon--dark h-fit"
                                                  aria-hidden="true"/>
                                </motion.button>
                                <motion.a

                                    href={"https://www.linkedin.com/in/thomazvmendes/"}
                                    target={"_blank"}
                                    className="link text-[var(--text)] hover:!text-[var(--primary)] rounded-full p-2 cursor-pointer"
                                    variants={socialRotateVariants}
                                    initial="rest"
                                    whileHover="hover"

                                    whileTap={{scale: 0.9}}
                                >
                                    <FaLinkedin size={25}/>
                                </motion.a>
                                <motion.a
                                    href={"https://github.com/Th0mzzz"}
                                    target={"_blank"}

                                    className="link text-[var(--text)] hover:!text-[var(--primary)] rounded-full p-2 cursor-pointer"
                                    variants={socialRotateVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    whileTap={{scale: 0.9}}
                                >
                                    <FaGithub size={25}/>
                                </motion.a>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    <motion.div
                        ref={mobileMenuRef}
                        onMouseDown={(e) => {
                            e.stopPropagation();
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className="lg:hidden fixed top-25 left-0 w-full bg-radial from-[var(--border)]/40 to-[var(--border)]/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg z-50 border border-[var(--border)]"
                        initial={{opacity: 0, y: -20, display: "none"}}
                        animate={openMenu && window.innerWidth < 1024 ? {
                            opacity: 1,
                            y: 20,
                            display: "block"
                        } : {opacity: 0, y: -20, display: "none"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}

                    >
                        <ul className="flex flex-col items-start gap-6">
                            {[
                                {href: "#about", label: "About me"},
                                {href: "#skills", label: "Skills"},
                                {href: "#projects", label: "Projects"},
                                {href: "#journey", label: "My Journey"},
                                {href: "#contact", label: "Get in Touch"},
                            ].map((item) => (
                                <li key={item.href + item.label} >
                                    <Link
                                        href={item.href}
                                        className="subtitle font-bold text-[var(--background)] hover:text-[var(--primary)] transition-colors"
                                        onClick={() => setOpenMenu(false) }
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-[var(--text)]/20 w-full flex items-center gap-3">
                                <motion.button
                                    type="button"
                                    aria-label="Alternar tema"
                                    onClick={toggleTheme}
                                    className="link text-[var(--background)] hover:!text-[var(--primary)] rounded-full p-2 cursor-pointer"
                                    whileHover={{rotate: 90}}
                                    whileTap={{scale: 0.9}}
                                    transition={{duration: 0.5, ease: "easeOut"}}
                                >

                                    <HiOutlineMoon size={30} className="theme-icon theme-icon--light h-fit"
                                                   aria-hidden="true"/>
                                    <HiOutlineSun size={30} className="theme-icon theme-icon--dark h-fit"
                                                  aria-hidden="true"/>
                                </motion.button>
                                <motion.a
                                    href={"https://www.linkedin.com/in/thomazvmendes/"}
                                    target="_blank"
                                    className="link text-[var(--background)] hover:!text-[var(--primary)] rounded-full p-2 cursor-pointer"
                                    whileHover={{rotate: 90}}
                                    whileTap={{scale: 0.9}}
                                    transition={{duration: 0.5, ease: "easeOut"}}
                                >
                                    <FaLinkedin size={25}/>
                                </motion.a>
                                <motion.a
                                    href={"https://github.com/Th0mzzz"}
                                    target="_blank"
                                    className="link text-[var(--background)] hover:!text-[var(--primary)] rounded-full p-2 cursor-pointer"
                                    whileHover={{rotate: 90}}
                                    whileTap={{scale: 0.9}}
                                    transition={{duration: 0.5, ease: "easeOut"}}
                                >
                                    <FaGithub size={25}/>
                                </motion.a>
                            </li>
                        </ul>
                    </motion.div>
                </nav>
            </header>
        </>
    )
}