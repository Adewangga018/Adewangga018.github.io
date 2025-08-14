import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Navbar() {
    const controls = useAnimation();

    // Animasi akan berjalan sekali saat komponen dimuat
    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const navVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = (delay = 0) => ({
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay } }
    });

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-dark-bg bg-opacity-80 backdrop-blur-sm p-3"
            variants={navVariants}
            initial="hidden"
            animate={controls}
        >
            <div className="container mx-auto flex justify-between items-center">
                <motion.a href="#home" className="text-xl font-bold text-light-gold flex items-center gap-2" variants={itemVariants(0.2)}>
                    <img
                        src="/images/gold-star.png"
                        alt="Gold Star"
                        className="w-12 h-12"
                    />
                </motion.a>
                <div className="hidden md:flex space-x-6 items-center">
                    <motion.a href="#home" className="hover:text-light-gold transition" variants={itemVariants(0.4)}>HOME</motion.a>
                    <motion.a href="#project" className="hover:text-light-gold transition" variants={itemVariants(0.5)}>PROJECT</motion.a>
                    <motion.a href="#document" className="hover:text-light-gold transition" variants={itemVariants(0.6)}>DOCUMENT</motion.a>
                    <motion.a href="#reach-out" className="bg-light-gold text-dark-bg px-4 py-2 rounded-md hover:bg-opacity-80 transition" variants={itemVariants(0.7)}>REACH OUT</motion.a>
                </div>
            </div>
        </motion.nav>
    );
}