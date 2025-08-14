import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Komponen untuk ikon panah
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

export default function ActionCard() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const itemVariants = (delay) => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
    });

    const [showDocs, setShowDocs] = React.useState(false);

    return (
        <section ref={ref} id="document" className="py-16 sm:py-24 bg-white relative overflow-hidden">
            {/* Cahaya Latar Belakang */}
            {/* ... kode cahaya tetap di sini ... */}
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    className="bg-white border-2 border-gray-900 rounded-3xl p-8 sm:p-12 shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Kolom Kiri */}
                        <motion.div className="flex flex-col items-center lg:items-start text-center lg:text-left" variants={itemVariants(0.2)}>
                            <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
                                ORGANIZE
                                <br />
                                IDEAS. LEAD
                                <br />
                                ACTION
                            </h2>
                            <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 mt-8 shadow-md">
                                <ArrowIcon />
                            </div>
                        </motion.div>

                        {/* Kolom Kanan */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                             <div className="lg:hidden flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 mb-8 shadow-md">
                                <ArrowIcon />
                            </div>
                            <motion.p className="text-gray-600 text-2xl text-justify leading-relaxed max-w-md font-bold my-2 lg:ml-auto" variants={itemVariants(0.4)}>
                                THE ABILITY TO COMPILE IDEAS INTO A CLEAR STRATEGY, THEN MOVE IT INTO REAL ACTION.
                            </motion.p>
                            <motion.p className="text-gray-600 text-2xl text-justify leading-relaxed max-w-md font-bold my-2 lg:ml-auto" variants={itemVariants(0.5)}>
                                NOT JUST PLANNING, BUT ALSO ENSURING EVERY DIRECTED STEP TOWARDS MEANINGFUL RESULTS.
                            </motion.p>
                            <motion.button
                                type="button"
                                onClick={() => setShowDocs(true)}
                                className="mt-8 inline-block bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 lg:ml-auto"
                                variants={itemVariants(0.6)}
                            >
                                KNOW MORE
                            </motion.button>
                            {/* ... Modal ... */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}