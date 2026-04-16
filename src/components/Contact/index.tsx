'use client';
import DecorativeCircles from '@/components/DecorativeCircles';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import ContactCard from './ContactCard';

const contactInfo = [
    {
        icon: FiLinkedin,
        label: 'LinkedIn',
        value: 'Thomaz Vasconcelos Mendes',
        href: 'https://www.linkedin.com/in/thomazvmendes/',
    },
    {
        icon: FiMail,
        label: 'E-mail',
        value: 'contatothomazvmendes@gmail.com',
        href: 'mailto:contatothomazvmendes@gmail.com?subject=Contato%20pelo%20Portfólio&body=Teste%20de%20mensagem%20para%20Thomaz',
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
            className="relative py-20 mt-40"
        >

            <div className="section">

                <div className="flex flex-col items-center ">
                    <motion.h3
                        className="supertitle mb-2 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In Touch
                    </motion.h3>

                    <motion.h3
                        className="text text-gray-500 mb-10 max-w-md text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Let&apos;s build something incredible together!
                    </motion.h3>

                    <div className="flex flex-wrap w-full gap-6 justify-center">
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

            </div>
        </section>
    );
}
