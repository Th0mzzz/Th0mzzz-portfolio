'use client';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import ContactCard from './ContactCard';
import {useTranslations} from "next-intl";

export default function Contact() {
    const t = useTranslations("contact");

    const contactInfo = [
        {
            icon: FiLinkedin,
            label: t("info.linkedin.label"),
            value: t("info.linkedin.value"),
            href: 'https://www.linkedin.com/in/thomazvmendes/',
        },
        {
            icon: FiMail,
            label: t("info.email.label"),
            value: t("info.email.value"),
            href: `mailto:contatothomazvmendes@gmail.com?subject=${encodeURIComponent(t("info.email.subject"))}&body=${encodeURIComponent(t("info.email.body"))}`,
        },
        {
            icon: FiMapPin,
            label: t("info.location.label"),
            value: t("info.location.value"),
        },
    ];

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
                        {t("title")}
                    </motion.h3>

                    <motion.h3
                        className="text text-gray-500 mb-10 max-w-md text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {t("subtitle")}
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
