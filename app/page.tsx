'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import NFTSection from '@/components/sections/NFTSection';
import AboutSection from '@/components/sections/AboutSection';
import CommunitySection from '@/components/sections/CommunitySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <NFTSection />
      <AboutSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}

