"use client";
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

interface ContactCardProps {
    icon: IconType;
    label: string;
    value: string;
    href?: string;
    index: number;
}

export default function ContactCard({ icon: Icon, label, value, href, index }: ContactCardProps) {
    const [copied, setCopied] = useState(false);

    const doCopy = async (text: string) => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.left = '-9999px';
                document.body.appendChild(ta);
                ta.focus();
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }

            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            // ignore
        }
    };

    const copyText = () => {
        // prefer visible value (e.g., email text); fallback to href
        const text = value ?? href ?? '';
        if (!text) return;
        // if mailto: link, extract email portion
        if (text.startsWith('mailto:')) {
            const mail = text.split(':')[1]?.split('?')[0] ?? text;
            doCopy(mail);
        } else {
            doCopy(text);
        }
    };

    const handleCopyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        copyText();
    };


    const root = (
        <motion.div
            className="flex items-center justify-between gap-4 p-5 bg-[var(--foreground)] rounded-2xl cursor-pointer group border border-transparent hover:border-[var(--primary)]/20 transition-colors"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 * index, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -2 }}
        >
            <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="flex flex-col min-w-0">
                    <span className="text text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                        {label}
                    </span>
                    <span className="link text-sm font-semibold truncate">
                        {value}
                    </span>
                </div>
            </div>

            <div className="flex items-center ml-4">
                <button
                    type="button"
                    onClick={handleCopyClick}
                    aria-label={`Copy ${label}`}
                    className="ml-2 p-2 rounded-md text-[var(--text)] bg-transparent hover:bg-[var(--background)] transition-colors"
                >
                    {copied ? (
                        <FiCheck className="w-4 h-4 text-[var(--primary)]" />
                    ) : (
                        <FiCopy className="w-4 h-4" />
                    )}
                </button>
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                {root}
            </a>
        );
    }

    return root;
}

