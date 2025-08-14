import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function GrowthSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.section
            ref={ref}
            className="bg-dark-bg text-white relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            {/* ... kode cahaya tetap di sini ... */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Kolom Kiri */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.h2 className="text-4xl sm:text-5xl font-bold leading-tight text-yellow-400" variants={itemVariants}>
                            TRUE GROWTH
                            <br />
                            COMES FROM THE
                            <br />
                            DISCIPLINE TO STAY
                            <br />
                            CONSISTENT
                        </motion.h2>
                        <motion.div className="mt-8 w-full max-w-xs lg:max-w-none" variants={itemVariants}>
                            <img src="/images/growth-2.JPG" alt="Growth 1" className="h-64 w-full object-cover rounded-lg shadow-md" />
                        </motion.div>
                    </div>

                    {/* Kolom Kanan */}
                    <motion.div className="w-full h-80 lg:h-[32rem]" variants={itemVariants}>
                        <img src="/images/growth-1.jpeg" alt="Growth 2" className="h-full w-full object-cover rounded-lg shadow-lg" />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}