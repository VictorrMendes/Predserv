import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Workflow from '@/components/sections/Workflow';
import Testimonials from '@/components/sections/Testimonials';
import Cta from '@/components/sections/Cta';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-predserv-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}