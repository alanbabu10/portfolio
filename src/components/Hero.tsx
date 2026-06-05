'use client';

import React from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import styles from './components.module.css';

const techStack = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'Python',
  'Django',
  'FastAPI',
  'MongoDB',
  'MySQL',
  'Tailwind CSS',
];

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [12, -12]),
    {
      stiffness: 200,
      damping: 25,
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-12, 12]),
    {
      stiffness: 200,
      damping: 25,
    }
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX =
      e.clientX - rect.left - width / 2;

    const mouseY =
      e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className={styles.hero}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit,minmax(350px,1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: '#38bdf8',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Welcome To My Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize:
                'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginTop: '1rem',
              color: '#ffffff',
            }}
          >
            Hi, I'm
            <br />
            <span
              style={{
                background:
                  'linear-gradient(90deg,#38bdf8,#8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor:
                  'transparent',
              }}
            >
              Alan Babu
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              color: '#cbd5e1',
              marginTop: '1rem',
              fontSize: '1.5rem',
              fontWeight: 600,
            }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              color: '#94a3b8',
              marginTop: '1.5rem',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              maxWidth: '650px',
            }}
          >
            I build modern web applications,
            scalable backend systems, and
            responsive user experiences using
            React, Next.js, TypeScript, Django,
            FastAPI, Node.js, Express.js,
            MongoDB, and MySQL.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginTop: '2rem',
            }}
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding:
                    '0.6rem 1rem',
                  borderRadius: '999px',
                  background:
                    'rgba(255,255,255,0.05)',
                  border:
                    '1px solid rgba(255,255,255,0.08)',
                  color: '#cbd5e1',
                  fontSize: '0.9rem',
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '2.5rem',
            }}
          >
            <a href="#contact">
              <button
                className={
                  styles.primaryButton
                }
              >
                Hire Me
              </button>
            </a>

            <a href="#projects">
              <button
                className={
                  styles.primaryButton
                }
              >
                View Projects
              </button>
            </a>

            <a
              href="/resume.pdf"
              download
            >
              <button
                className={
                  styles.primaryButton
                }
              >
                Download Resume
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          onMouseMove={
            handleMouseMove
          }
          onMouseLeave={
            handleMouseLeave
          }
          style={{
            rotateX,
            rotateY,
            transformStyle:
              'preserve-3d',
            display: 'flex',
            justifyContent:
              'center',
          }}
        >
          <div
            style={{
              width: '350px',
              height: '350px',
              borderRadius: '32px',
              background:
                'rgba(255,255,255,0.04)',
              backdropFilter:
                'blur(20px)',
              border:
                '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent:
                'center',
              alignItems:
                'center',
              boxShadow:
                '0 20px 60px rgba(0,0,0,0.35)',
            }}
          >
            <Image
              src="/alan.jpg"
              alt="Alan Babu"
              width={280}
              height={280}
              priority
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                border:
                  '4px solid rgba(56,189,248,0.4)',
                boxShadow:
                  '0 0 40px rgba(56,189,248,0.4)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}