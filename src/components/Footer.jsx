import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Komponen untuk ikon sosial media
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300">
        {children}
    </a>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const itemVariants = (delay) => ({
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } }
    });

    return (
        <footer ref={ref} id="reach-out" className="bg-dark-bg text-white py-16 sm:py-24 relative overflow-hidden">
            {/* ... kode cahaya tetap di sini ... */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Kolom Kiri */}
                    <div className="text-center font-bold text-justify lg:text-left">
                        <motion.h2
                            className="text-4xl font-extrabold text-yellow-400 uppercase tracking-wider"
                            variants={itemVariants(0.2)}
                            initial="hidden"
                            animate={controls}
                        >
                            Here is my official CV!
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-2xl text-gray-400 text-justify max-w-lg"
                            variants={itemVariants(0.4)}
                            initial="hidden"
                            animate={controls}
                        >
                            A reflection of my journey and skills. More than just a record of work, it tells the story of growth and the values i bring into every project.
                        </motion.p>
                        <motion.a 
                            href="https://drive.google.com/file/d/1lbfVBx6GDnTTxFJ6YxzVhAm9ZbWEAggj/view?usp=sharing"
                            target="_blank"
                            className="mt-8 inline-block bg-yellow-400 text-gray-500 px-10 py-4 rounded-lg font-extrabold text-2xl hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
                            variants={itemVariants(0.6)}
                            initial="hidden"
                            animate={controls}
                        >
                            LET'S FIND MY CV!
                        </motion.a>
                    </div>

                    {/* Kolom Kanan */}
                    <div className="flex flex-col items-center">
                        <motion.img 
                            src="/images/lamp.png"
                            alt="Idea light bulb" 
                            className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                            variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        />
                        <motion.div
                            className="mt-20 w-full flex flex-row justify-center items-center gap-3"
                            variants={itemVariants(0.5)}
                            initial="hidden"
                            animate={controls}
                        >
                            <h3 className="text-3xl font-extrabold tracking-widest text-white whitespace-nowrap mr-12">GET SOCIAL</h3>
                            <div className="flex flex-row items-center space-x-5 text-4xl">
                                <SocialIcon href="https://www.linkedin.com/in/arjuna-dewangga-67608732b/">
                                    <span className="inline-block align-middle"><LinkedInIcon /></span>
                                </SocialIcon>
                                <SocialIcon href="https://wa.me/6281359449097">
                                    <span className="inline-block align-middle"><WhatsAppIcon /></span>
                                </SocialIcon>
                                <SocialIcon href="https://www.instagram.com/dw_angga018">
                                    <span className="inline-block align-middle"><InstagramIcon /></span>
                                </SocialIcon>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
}