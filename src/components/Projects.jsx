import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';



const ProjectCard = ({ imgSrc, title, description, link, index, inView }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-dark-gray p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-light-gold"
        tabIndex={0}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
    >
        <img src={imgSrc} alt={title} className="mx-auto mb-4 max-w-full" style={{height: 'auto', width: '100%'}} />
        <h3 className="text-xl font-bold text-light-gold mb-2">{title}</h3>
        <p className="text-light-gray">{description}</p>
    </motion.a>
);

export default function Projects() {
    const [showCatalog, setShowCatalog] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    // Project untuk tampilan utama
    const mainProjects = [
        { imgSrc: '/images/foundit.png', title: 'FOUND IT', description: 'Lost & Found applications for the people of Surabaya.', link: 'https://github.com/mas663/foundIT-web' },
        { imgSrc: '/images/netflix-remake.png', title: 'NETFLIX (RE-MAKE)', description: 'Remake of the Netflix application with a simpler display.', link: 'https://github.com/Adewangga018/netflix-remake' },
        { imgSrc: '/images/perpusgul.png', title: 'PERPUSGUL (DEVOPS)', description: 'Recap application and book management for community literacy.', link: 'https://github.com/Adewangga018/fp-pso' },
    ];
    // Project untuk katalog pop up (termasuk SmartLib)
    const catalogProjects = [
        ...mainProjects,
        { imgSrc: '/images/smartlib.png', title: 'SMARTLIB', description: 'Personal book collection management platform to manage user book lists.', link: 'https://github.com/Adewangga018/smartlib' },
        { imgSrc: '/images/reporting-generator.png', title: 'REPORTING GENERATOR', description: 'A system for automatically generating reports based on existing data.', link: 'https://github.com/daniprm/reporting-generator-kelompok1-ABD-A/tree/main' },
        { imgSrc: '/images/sudoku.png', title: 'SUDOKU', description: 'Logic-based number puzzle by filling a 9x9 grid with the numbers 1 to 9.', link: 'https://github.com/ahmadhilmi9/fp-asd-group-1' },
        { imgSrc: '/images/tictactoe.png', title: 'TICTACTOE', description: 'Game for two players X and O who take turns marking the spaces in a 3×3 grid', link: 'https://github.com/ahmadhilmi9/fp2-asd-group-1' },
    ];
    return (
        <motion.section
            ref={ref}
            id="project"
            className="py-20 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
        >
            {/* Cahaya kuning seperempat lingkaran di pojok kiri bawah */}
            <div
                className="pointer-events-none"
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '560px',
                    height: '560px',
                    zIndex: 1,
                    background: 'radial-gradient(circle at 100% 0%, rgba(250, 204, 21, 0.2) 0%, rgba(250, 204, 21, 0.05) 50%, rgba(250, 204, 21, 0) 70%)',
                    borderBottomLeftRadius: '100%',
                    transform: 'rotate(180deg)'
                }}
            ></div>
            {/* Cahaya kuning seperempat lingkaran di pojok kanan atas */}
            <div
                className="pointer-events-none"
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '560px',
                    height: '560px',
                    zIndex: 1,
                    background: 'radial-gradient(circle at 0% 100%, rgba(250, 204, 21, 0.2) 0%, rgba(250, 204, 21, 0.05) 50%, rgba(250, 204, 21, 0) 70%)',
                    borderTopRightRadius: '100%',
                    transform: 'rotate(180deg)'
                }}
            ></div>
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-yellow-400"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    MY PROJECTS
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8 px-5">
                    {mainProjects.map((p, idx) => (
                        <ProjectCard key={p.title} {...p} index={idx} inView={inView} />
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => setShowCatalog(true)}
                    className="mt-12 inline-block border-2 border-light-gold text-light-gold px-8 py-3 rounded-full font-bold hover:bg-light-gold hover:text-dark-bg transition focus:outline-none focus:ring-2 focus:ring-light-gold"
                >
                    EXPLORE
                </button>
                <div className="mt-6 text-lg font-semibold text-gray-300 tracking-wide">
                    PRIORITIZING PROFESSIONALS IN WORKING ON THIS PROJECT
                </div>
                {/* Modal Katalog Project */}
                {showCatalog && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                        <div
                            className="bg-[#23272a] rounded-xl shadow-2xl max-w-3xl w-full p-8 relative animate-fadeIn max-h-[80vh] overflow-y-auto"
                            style={{ scrollbarColor: '#000 #23272a', scrollbarWidth: 'thin' }}
                        >
                            <button
                                onClick={() => setShowCatalog(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <h3 className="text-3xl font-bold mb-4 text-yellow-400 text-center">PROJECT CATALOG</h3>
                            <div className="w-160 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
                            <style>{`
                                .custom-scrollbar::-webkit-scrollbar {
                                    width: 8px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: #000;
                                    border-radius: 8px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-track {
                                    background: #23272a;
                                }
                            `}</style>
                            <div className="grid md:grid-cols-3 gap-8 custom-scrollbar">
                                {catalogProjects.map((p) => (
                                    <a
                                        key={p.title}
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark-gray rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-light-gold"
                                        tabIndex={0}
                                    >
                                        <img src={p.imgSrc} alt={p.title} className="mb-4 rounded-lg max-w-full max-h-40 object-contain bg-gray-100" />
                                        <h4 className="text-lg font-bold text-light-gold mb-2">{p.title}</h4>
                                        <p className="text-light-gray text-sm">{p.description}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
    </motion.section>
    );
}
