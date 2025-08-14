import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// --- Ganti path ini dengan lokasi gambar Anda ---
const profileImageUrl = '/images/juna-sisfor.jpeg';

export default function ClosingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section ref={ref} id="closing" className="py-20 sm:py-32 bg-white relative overflow-hidden">
            {/* ... kode cahaya tetap di sini ... */}
            
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Kolom Kiri: Teks */}
                    <div className="text-center lg:text-left">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold leading-tight text-justify uppercase text-yellow-500"
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            TOGETHER, EACH STEP BECOMES STRONGER AND MORE MEANINGFUL.
                        </motion.h2>
                        <motion.p
                            className="mt-6 text-lg text-gray-700 italic font-bold max-w-xl mx-auto text-justify lg:mx-0"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            I believe that true power was born from togetherness. Every step taken together not only adds power, but also presents a deeper meaning.
                        </motion.p>
                        <motion.p
                            className="mt-8 text-2xl font-extrabold text-yellow-500 text-right tracking-wider"
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            ARJUNA DEWANGGA
                        </motion.p>
                    </div>

                    {/* Kolom Kanan: Gambar Profil */}
                    <div className="flex justify-center">
                        <motion.img 
                            src={profileImageUrl}
                            alt="Arjuna Dewangga"
                            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-yellow-400 shadow-2xl border-4 border-gray-400"
                            variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}