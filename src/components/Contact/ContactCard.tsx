'use client';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ContactCardProps {
    icon: IconType;
    label: string;
    value: string;
    href?: string;
    index: number;
}

export default function ContactCard({ icon: Icon, label, value, href, index }: ContactCardProps) {
    const content = (
        <motion.div
            className="flex items-center gap-4 p-5 bg-[var(--foreground)] rounded-2xl cursor-pointer group border border-transparent hover:border-[var(--primary)]/20 transition-colors"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 * index, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -2 }}
        >
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
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                {content}
            </a>
        );
    }

    return content;
}

