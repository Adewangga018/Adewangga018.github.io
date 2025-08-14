import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function InfinitySection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            className="bg-white py-16 sm:py-24 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
        >
            {/* Cahaya Latar Belakang */}
            <div
                className="pointer-events-none"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '560px',
                    height: '560px',
                    zIndex: 1,
                    background: 'radial-gradient(circle at 100% 100%, rgba(250, 204, 21, 0.2) 0%, rgba(250, 204, 21, 0.05) 50%, rgba(250, 204, 21, 0) 70%)',
                    borderTopLeftRadius: '100%',
                    transform: 'rotate(180deg)'
                }}
            ></div>
            <div
                className="pointer-events-none"
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '560px',
                    height: '560px',
                    zIndex: 1,
                    background: 'radial-gradient(circle at 0% 0%, rgba(250, 204, 21, 0.2) 0%, rgba(250, 204, 21, 0.05) 50%, rgba(250, 204, 21, 0) 70%)',
                    borderBottomRightRadius: '100%',
                    transform: 'rotate(180deg)'
                }}
            ></div>
            {/* Konten Utama */}
            <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
                        exit={{ x: -80, opacity: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.h2
                            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight"
                            initial={{ y: 40, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            TOWARDS INFINITY
                            <br />
                            AND BEYOND
                        </motion.h2>
                        <div className="mt-8">
                            <hr className="w-24 border-t-2 border-gray-300" />
                            <motion.p
                                className="mt-6 text-lg leading-7 text-gray-600 text-justify font-bold"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                GREAT LEADERS MANAGE IN THEIR OWN WAY. EACH WITH A PERSONAL STYLE TO GO WITH. OF COURSE, THIS BE INFLUENCED BY ALL TYPES OF COLLABORATIVE PLATFORMS IN CHOOSING.
                            </motion.p>
                            <motion.p
                                className="mt-6 text-lg leading-7 text-gray-600 text-justify font-bold"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                SO, I AM NOT AFRAID TO BE A FOOL IN ORDER TO FIND OUTSIDE THE BOX OF IDEAS.
                            </motion.p>
                            <hr className="w-24 mt-6 border-t-2 border-gray-300" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ x: 80, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
                        exit={{ x: 80, opacity: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <motion.img src="/images/toward-1.JPG" alt="toward 1" className="w-full h-48 object-cover rounded-lg shadow-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        />
                        <motion.img src="/images/toward-2.jpeg" alt="toward 2" className="w-full h-48 object-cover rounded-lg shadow-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        />
                        <motion.img src="/images/toward-3.JPG" alt="toward 3" className="w-full h-48 object-cover rounded-lg shadow-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        />
                        <motion.img src="/images/toward-4.jpeg" alt="toward 4" className="w-full h-48 object-cover rounded-lg shadow-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}