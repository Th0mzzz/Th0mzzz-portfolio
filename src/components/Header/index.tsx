'use client';
import SmallLogo from "@/assets/th0mzzz-logo-sm.png";
import {motion} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState, useTransition} from "react";
import {HiChevronDown, HiOutlineMenuAlt4, HiOutlineMoon, HiOutlineSun} from "react-icons/hi";
import {useTheme} from "next-themes";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";
import {HiMiniXMark} from "react-icons/hi2";
import {useRouter} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import {AppLocale, localeLabels, locales} from "@/i18n/config";

const setLocaleCookie = (nextLocale: AppLocale) => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
};

export default function Header() {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const [isSwitchingLocale, startLocaleTransition] = useTransition();
    const {theme, setTheme} = useTheme();
    const [openMenu, setOpenMenu] = useState(false);
    const [isMobileViewport, setIsMobileViewport] = useState(false);
    const [isDesktopLanguageOpen, setIsDesktopLanguageOpen] = useState(false);
    const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)
    const desktopLanguageMenuRef = useRef<HTMLDivElement>(null)
    const mobileLanguageMenuRef = useRef<HTMLDivElement>(null)

    const navItems = [
        {href: "#about", label: t("header.nav.about")},
        {href: "#skills", label: t("header.nav.skills")},
        {href: "#projects", label: t("header.nav.projects")},
        {href: "#journey", label: t("header.nav.journey")},
        {href: "#contact", label: t("header.nav.contact")},
    ];

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

    const handleLocaleSelect = (nextLocale: AppLocale) => {
        setIsDesktopLanguageOpen(false);
        setIsMobileLanguageOpen(false);

        if (nextLocale === locale) {
            return;
        }

        setLocaleCookie(nextLocale);

        startLocaleTransition(() => {
            router.refresh();
        });
    };

    const currentLocaleLabel = localeLabels[locale as AppLocale] ?? locale.toUpperCase();

    useEffect(() => {
        const updateViewport = () => {
            setIsMobileViewport(window.innerWidth < 1024);
        };

        updateViewport();
        window.addEventListener("resize", updateViewport);

        return () => {
            window.removeEventListener("resize", updateViewport);
        };
    }, []);

    useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (!openMenu) return;

                const target = event.target as HTMLElement;
                const clickedInsideMenu = mobileMenuRef.current?.contains(target);
                const clickedMenuButton = mobileMenuButtonRef.current?.contains(target);

                if (!clickedInsideMenu && !clickedMenuButton) {
                    setOpenMenu(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
        , [openMenu]);

    useEffect(() => {
        const closeLanguageMenuOnOutsideClick = (event: MouseEvent) => {
            const target = event.target as Node;

            if (!desktopLanguageMenuRef.current?.contains(target)) {
                setIsDesktopLanguageOpen(false);
            }

            if (!mobileLanguageMenuRef.current?.contains(target)) {
                setIsMobileLanguageOpen(false);
            }
        };

        const closeLanguageMenuOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsDesktopLanguageOpen(false);
                setIsMobileLanguageOpen(false);
            }
        };

        document.addEventListener("mousedown", closeLanguageMenuOnOutsideClick);
        document.addEventListener("keydown", closeLanguageMenuOnEscape);

        return () => {
            document.removeEventListener("mousedown", closeLanguageMenuOnOutsideClick);
            document.removeEventListener("keydown", closeLanguageMenuOnEscape);
        };
    }, []);

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
                        <Image src={SmallLogo} alt={t("header.logoAlt")} className="w-15"/>
                    </Link>


                    <button
                        ref={mobileMenuButtonRef}
                        className="lg:hidden"
                        onClick={() => {
                            setOpenMenu(!openMenu);
                            if (openMenu) {
                                setIsMobileLanguageOpen(false);
                            }
                        }}
                        aria-label={t("header.openMenuAria")}
                    >
                        {openMenu ? <HiMiniXMark size={45} className="text-[var(--background)]"/>

                            : <HiOutlineMenuAlt4 size={45} className="text-[var(--background)]"/>
                        }
                    </button>

                    <div
                        className="hidden lg:flex lg:relative lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:shadow-none lg:rounded-none lg:w-fit lg:border-0">
                        <ul className="flex items-center gap-8">
                            {navItems.map((item) => (
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
                                <div ref={desktopLanguageMenuRef} className="relative">
                                    <button
                                        type="button"
                                        aria-haspopup="listbox"
                                        aria-expanded={isDesktopLanguageOpen}
                                        aria-label={t("common.languageLabel")}
                                        disabled={isSwitchingLocale}
                                        onClick={() => setIsDesktopLanguageOpen((prev) => !prev)}
                                        className="link flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)]/70 disabled:opacity-60"
                                    >
                                        <span className="text-[10px] uppercase tracking-wider text-[var(--text)]/70">{t("common.languageLabel")}</span>
                                        <span className="text-sm text-[var(--text)] min-w-10 text-left">{currentLocaleLabel}</span>
                                        <HiChevronDown
                                            size={16}
                                            className={`text-[var(--text)] transition-transform duration-300 ${isDesktopLanguageOpen ? "rotate-180" : "rotate-0"}`}
                                            aria-hidden="true"
                                        />
                                    </button>

                                    <div
                                        role="listbox"
                                        aria-label={t("common.languageLabel")}
                                        className={`absolute right-0 mt-2 w-32 rounded-xl border border-[var(--border)] bg-[var(--foreground)]/95 backdrop-blur-md p-1 shadow-xl transition-all duration-300 origin-top-right ${isDesktopLanguageOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}
                                    >
                                        {locales.map((value) => {
                                            const isActive = value === locale;

                                            return (
                                                <button
                                                    key={value}
                                                    type="button"
                                                    role="option"
                                                    aria-selected={isActive}
                                                    onClick={() => handleLocaleSelect(value)}
                                                    className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${isActive ? "bg-[var(--primary)]/20 text-[var(--primary)]" : "text-[var(--text)] hover:bg-[var(--border)]/60"}`}
                                                >
                                                    {localeLabels[value]}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                <motion.button
                                    type="button"
                                    aria-label={t("header.themeToggleAria")}
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
                        animate={openMenu && isMobileViewport ? {
                            opacity: 1,
                            y: 20,
                            display: "block"
                        } : {opacity: 0, y: -20, display: "none"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}

                    >
                        <ul className="flex flex-col items-start gap-6">
                            {navItems.map((item) => (
                                <li key={item.href + item.label} >
                                    <Link
                                        href={item.href}
                                        className="subtitle font-bold text-[var(--background)] hover:text-[var(--primary)] transition-colors"
                                        onClick={() => {
                                            setOpenMenu(false);
                                            setIsMobileLanguageOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-[var(--text)]/20 w-full flex items-center gap-3">
                                <div ref={mobileLanguageMenuRef} className="relative">
                                    <button
                                        type="button"
                                        aria-haspopup="listbox"
                                        aria-expanded={isMobileLanguageOpen}
                                        aria-label={t("common.languageLabel")}
                                        disabled={isSwitchingLocale}
                                        onClick={() => setIsMobileLanguageOpen((prev) => !prev)}
                                        className="link flex items-center gap-2 px-2 py-1 rounded-full border border-[var(--text)]/25 disabled:opacity-60"
                                    >
                                        <span className="text-[10px] uppercase tracking-wider text-[var(--background)]/80">{t("common.languageLabel")}</span>
                                        <span className="text-sm text-[var(--background)] min-w-10 text-left">{currentLocaleLabel}</span>
                                        <HiChevronDown
                                            size={16}
                                            className={`text-[var(--background)] transition-transform duration-300 ${isMobileLanguageOpen ? "rotate-180" : "rotate-0"}`}
                                            aria-hidden="true"
                                        />
                                    </button>

                                    <div
                                        role="listbox"
                                        aria-label={t("common.languageLabel")}
                                        className={`absolute left-0 mt-2 w-32 rounded-xl border border-[var(--text)]/25 bg-[var(--foreground)]/95 backdrop-blur-md p-1 shadow-xl transition-all duration-300 origin-top ${isMobileLanguageOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}
                                    >
                                        {locales.map((value) => {
                                            const isActive = value === locale;

                                            return (
                                                <button
                                                    key={value}
                                                    type="button"
                                                    role="option"
                                                    aria-selected={isActive}
                                                    onClick={() => handleLocaleSelect(value)}
                                                    className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${isActive ? "bg-[var(--primary)]/20 text-[var(--primary)]" : "text-[var(--text)] hover:bg-[var(--border)]/60"}`}
                                                >
                                                    {localeLabels[value]}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                <motion.button
                                    type="button"
                                    aria-label={t("header.themeToggleAria")}
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