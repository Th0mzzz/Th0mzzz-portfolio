'use client';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import Title from '@/components/Title';
import DecorativeCircles from '@/components/DecorativeCircles';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const contactInfo = [
    {
        icon: FiLinkedin,
        label: 'LinkedIn',
        value: 'Thomaz Vasconcelos Mendes',
        href: 'https://www.linkedin.com/in/thomaz-vasconcelos-mendes/',
    },
    {
        icon: FiMail,
        label: 'E-mail',
        value: 'contatothomazvmendes@gmail.com',
        href: 'mailto:contatothomazvmendes@gmail.com',
    },
    {
        icon: FiMapPin,
        label: 'Location',
        value: 'Barueri, SP — Brasil',
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-20 bg-[var(--background)] overflow-hidden"
        >
            <DecorativeCircles position="bottom-right" />

            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Title text="Contact" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div>
                        <motion.h3
                            className="supertitle mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Get In Touch
                        </motion.h3>

                        <motion.p
                            className="text text-gray-500 mb-10 max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Let&apos;s build something incredible together! Feel free to
                            reach out through any of the channels below or send me a
                            message directly.
                        </motion.p>

                        <div className="flex flex-col gap-4">
                            {contactInfo.map((info, index) => (
                                <ContactCard
                                    key={info.label}
                                    icon={info.icon}
                                    label={info.label}
                                    value={info.value}
                                    href={info.href}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
