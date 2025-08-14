import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import InfinitySection from '@/components/InfinitySection';
import ActionCard from '@/components/ActionCard';
import GrowthSection from '@/components/GrowthSection';
import ClosingSection from '@/components/ClosingSection';
import './App.css';
import './i18n/i18n'; // Inisialisasi i18next jika ingin digunakan

// Komponen utama aplikasi Anda
function App() {
    return (
        <div className="bg-dark-bg text-white/90 relative overflow-hidden has-corner-light">
            <Navbar />
            <main style={{ zIndex: 2, position: 'relative' }}>
                <Hero />
                <InfinitySection />
                <Projects />
                <ActionCard />
                <GrowthSection />
                <ClosingSection />
            </main>
            <Footer />
        </div>
    );
}

// Render komponen utama ke dalam elemen #root di HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);