'use client';

import Lenis from '@studio-freight/react-lenis';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Interactive3DSpace from '@/components/Interactive3DSpace';

export default function Home() {
  return (
    <Lenis root options={{ duration: 1.5, wheelMultiplier: 1.2 }}>
      <main style={{ position: 'relative' }}>
        <Cursor />
        <Navbar />
        <Interactive3DSpace />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </Lenis>
  );
}

