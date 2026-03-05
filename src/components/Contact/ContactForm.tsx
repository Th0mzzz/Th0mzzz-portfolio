'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.3 + i * 0.1, ease: 'easeOut' as const },
    }),
};

const inputClasses =
    'w-full bg-transparent border-b border-gray-300 focus:border-[var(--primary)] outline-none py-3 text transition-colors duration-300 placeholder:text-gray-400';

export default function ContactForm() {
    const [focused, setFocused] = useState<string | null>(null);

    return (
        <motion.div
            className="bg-[var(--foreground)] rounded-2xl p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 className="title text-lg mb-8 flex items-center gap-2">
                <FiSend className="w-5 h-5 text-[var(--primary)]" />
                Send me an E-mail
            </h3>

            <form
                action="https://formsubmit.co/contatothomazvmendes@gmail.com"
                method="POST"
                className="flex flex-col gap-6"
            >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                        custom={0}
                        variants={fieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <label className="text text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Write your complete name"
                            required
                            className={inputClasses}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                        />
                        <motion.div
                            className="h-[2px] bg-[var(--primary)] origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: focused === 'name' ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <label className="text text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                            E-mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            className={inputClasses}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                        />
                        <motion.div
                            className="h-[2px] bg-[var(--primary)] origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: focused === 'email' ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>

                <motion.div
                    custom={2}
                    variants={fieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <label className="text text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="_subject"
                        placeholder="What's the discussion"
                        required
                        className={inputClasses}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                    />
                    <motion.div
                        className="h-[2px] bg-[var(--primary)] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focused === 'subject' ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <motion.div
                    custom={3}
                    variants={fieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <label className="text text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                        Your message
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        placeholder="Write your message..."
                        required
                        className={`${inputClasses} resize-none`}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                    />
                    <motion.div
                        className="h-[2px] bg-[var(--primary)] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focused === 'message' ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <motion.div
                    custom={4}
                    variants={fieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-end"
                >
                    <motion.button
                        type="submit"
                        className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3 rounded-xl link font-semibold transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Submit
                    </motion.button>
                </motion.div>
            </form>
        </motion.div>
    );
}
