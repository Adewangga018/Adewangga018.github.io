import React from 'react';
import { motion } from 'framer-motion';

// --- Ganti path ini dengan lokasi gambar Anda ---
const profileImageUrl = '/images/juna-indi.png'; // Pastikan gambar ini ada di folder /public/images/

export default function Hero() {
    return (
        <section
            id="home"
            className="relative bg-dark-bg text-white w-full min-h-screen h-screen overflow-hidden flex"
        >
            {/* Kontainer Utama */}
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-20">

                {/* === KOLOM KIRI (FOTO) === */}
                <div className="w-full md:w-1/2 h-full flex items-end justify-center md:justify-start">
                    <motion.div
                        className="relative w-full h-full"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <img
                            src={profileImageUrl}
                            alt="Arjuna"
                            className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-auto max-h-[95vh] w-auto max-w-none object-contain"
                        />
                    </motion.div>
                </div>

                {/* === KOLOM KANAN (TEKS) === */}
                <div className="w-full md:w-1/2 text-center md:text-left pb-20 md:pb-0">
                    <motion.h2
                        className="text-xl font-semibold uppercase tracking-wider mb-2"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    >
                        HII, I'M ARJUNA. I ALWAYS EXPLORE
                    </motion.h2>
                    <motion.h1
                        className="text-5xl lg:text-7xl font-bold leading-tight mb-4"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                    >
                        <span className="text-yellow-400">ANYTHING</span>
                        <br />
                        <span className="text-yellow-400">ANYTIME</span>
                        <br />
                        <span className="text-yellow-400">ANYWHERE</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-300"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
                    >
                        ABOUT THE WORLD
                    </motion.p>
                </div>

            </div>
        </section>
    );
}