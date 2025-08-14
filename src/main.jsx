import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import InfinitySection from '@/components/InfinitySection';
import ActionCard from '@/components/ActionCard';
import GrowthSection from '@/components/GrowthSection';
import ClosingSection from '@/components/ClosingSection';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-dark-bg text-white/90 relative overflow-hidden has-corner-light">
                <Navbar />
                <main style={{ zIndex: 2, position: 'relative' }}>
                    <Hero />
                    <InfinitySection />
                    <Projects />
                    <ActionCard />
                    <GrowthSection />
                    <ClosingSection />
                    {/* Anda bisa menambahkan komponen lain di sini sesuai PDF */}
                </main>
                <Footer />
            </div>
        </>
    );
}