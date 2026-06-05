'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './components.module.css';

export default function Hero(): React.JSX.Element {
  // 3D Tilt Effect state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className={styles.hero} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className={styles.heroContent} style={{ zIndex: 2 }}>
        {/* Floating 3D Interactive Holographic Panel */}
        <motion.div
          className={styles.heroImageContainer}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            cursor: 'grab',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '280px',
            width: '280px',
            marginBottom: '3rem',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {/* Glassmorphic 3D Card */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '40px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translateZ(50px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Pulsing neon core */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--accent-blue) 0%, var(--accent-purple) 70%)',
                filter: 'blur(15px)',
                opacity: 0.85,
                animation: 'float 4s ease-in-out infinite',
              }}
            />
            
            {/* Orbiting ring */}
            <div
              style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '1px dashed rgba(14, 165, 233, 0.4)',
                transform: 'rotateX(75deg) rotateY(15deg)',
                animation: 'spin 12s linear infinite',
              }}
            />
          </div>
        </motion.div>

        {/* Headline and Subhead */}
        <div style={{ pointerEvents: 'none' }}>
          <motion.h1
            className={styles.heroTitle}
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(to bottom, #ffffff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          >
            Coding Beyond Gravity
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              color: '#94a3b8',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            ALAN BABU | <span className="neon-text">Full Stack Engineer</span>
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        >
          <a href="#about">
            <button className={styles.primaryButton}>Discover More</button>
          </a>
          <a href="#projects">
            <button
              className={styles.primaryButton}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              View Work
            </button>
          </a>
          <a href="/resume.pdf" download="Alan_Babu_Resume.pdf">
            <button
              className={styles.primaryButton}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
