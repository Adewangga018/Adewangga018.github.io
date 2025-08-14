import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Komponen untuk ikon panah
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

// Komponen untuk setiap kartu dokumen di dalam modal
const DocumentCard = ({ imgSrc, title, description, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-dark-gray p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-light-gold"
        tabIndex={0}
    >
        <img src={imgSrc} alt={title} className="mx-auto mb-3 h-24 w-24 object-contain bg-white rounded-md p-2" />
        <h4 className="text-lg font-bold text-light-gold mb-1">{title}</h4>
        <p className="text-light-gray text-sm">{description}</p>
    </a>
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

    const [showDocs, setShowDocs] = useState(false);

    // Daftar dokumen Anda
    const documents = [
        {
            imgSrc: '/images/eucs-paper.png',
            title: 'E-CERTIFICATE EUCS',
            description: 'Certificate of participation in the End User Computing Skills (EUCS) program.',
            link: 'https://drive.google.com/file/d/1H5MA5bm5SRURrJzdVZzWdcYSOb5E0lv4/view?usp=drive_link' // Ganti dengan link dokumen Anda
        },
        {
            imgSrc: '/images/software-requirement.png',
            title: 'SOFTWARE REQUIREMENT',
            description: 'Documentation of software requirement specifications for various projects.',
            link: 'https://drive.google.com/file/d/1XANGfvBj0Ig9vSpc-S6EsDJlUj3Zjcnc/view?usp=drive_link' // Ganti dengan link dokumen Anda
        },
        {
            imgSrc: '/images/data-modeling.jpg',
            title: 'DATA MODELING',
            description: 'Examples of data modeling for database design and analysis.',
            link: 'https://drive.google.com/file/d/1rJiq7O1w0JRKgKPL_O3TDmaV_moxPnWu/view?usp=drive_link' // Ganti dengan link dokumen Anda
        },
        {
            imgSrc: '/images/data-warehouse.png',
            title: 'DATA WAREHOUSE',
            description: 'Design and implementation of data warehouse systems.',
            link: 'https://drive.google.com/file/d/1JN1ormn_rGMrZPqOn3dPOAXHKv3f45rF/view?usp=drive_link' // Ganti dengan link dokumen Anda
        },
        {
            imgSrc: '/images/strategic-planning.jpg',
            title: 'STRATEGIC PLANNING',
            description: 'Documents outlining strategic planning and project management.',
            link: 'https://drive.google.com/file/d/15XCgIJ4iVUhf-PFb6xGJuwnt_-JnbCM1/view?usp=drive_link' // Ganti dengan link dokumen Anda
        },
        {
            imgSrc: '/images/agile-implementation.png',
            title: 'AGILE IMPLEMENTATION',
            description: 'Case studies of Agile methodology implementation in projects.',
            link: 'https://drive.google.com/file/d/1oy1WkgpjRVJyCL2Mnw5SWmAZlz8lW3a-/view?usp=drive_link' // Ganti dengan link dokumen Anda
        },
        {
            imgSrc: '/images/monev-ti.jpg',
            title: 'MONITORING & EVALUATION',
            description: 'Reports on monitoring and evaluation of IT project performance.',
            link: 'https://drive.google.com/file/d/1dRLSin3Rjodws3IU4LfD_mlZQdmYZOVe/view?usp=drive_link' // Ganti dengan link dokumen Anda
        }
    ];

    return (
        <section ref={ref} id="document" className="py-16 sm:py-24 bg-white relative overflow-hidden">
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
                            <h2 className="text-5xl sm:text-6xl font-extrabold text-yellow-400 leading-tight">
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
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Modal Dokumen */}
            {showDocs && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div
                        className="bg-[#23272a] rounded-xl shadow-2xl max-w-3xl w-full p-8 relative animate-fadeIn max-h-[80vh] overflow-y-auto"
                        style={{ scrollbarColor: '#000 #23272a', scrollbarWidth: 'thin' }}
                    >
                        <button
                            onClick={() => setShowDocs(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h3 className="text-3xl font-bold mb-4 text-yellow-400 text-center">MY DOCUMENTS</h3>
                        <div className="w-160 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
                        <style>{`
                            .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                            .custom-scrollbar::-webkit-scrollbar-thumb { background: #000; border-radius: 8px; }
                            .custom-scrollbar::-webkit-scrollbar-track { background: #23272a; }
                        `}</style>
                        <div className="grid md:grid-cols-3 gap-8 custom-scrollbar">
                            {documents.map((doc) => (
                                <DocumentCard key={doc.title} {...doc} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}