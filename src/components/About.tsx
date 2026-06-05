'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  User,
  MapPin,
  Calendar,
  Sparkles,
} from 'lucide-react';
import styles from './components.module.css';

const skillCards = [
  {
    title: 'Frontend Development',
    
    icon: <Code2 size={32} />,
    description:
      'Building modern, responsive, and high-performance user interfaces with React, Next.js, TypeScript, Tailwind CSS, and Bootstrap.',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend Development',
    icon: <Server size={32} />,
    description:
      'Developing scalable REST APIs, authentication systems, dashboards, and business applications using Django, FastAPI, Node.js, and Express.js.',
    skills: [
      'Django',
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST API',
      'Python',
    ],
  },
  {
    title: 'Database & Deployment',
    icon: <Database size={32} />,
    description:
      'Managing databases, deployments, version control, and production-ready applications with modern development practices.',
    skills: [
      'MongoDB',
      'MySQL',
      'Git',
      'GitHub',
      'Vercel',
      'Linux',
    ],
  },
];

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} style={{ fontFamily: 'monospace' }}>0{suffix}</span>;
}

export default function About() {
  return (
    <section
      id="about"
      className={styles.section}
      style={{
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 5rem',
          }}
        >
          <p
            style={{
              color: '#38bdf8',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            About Me
          </p>

          <h2
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}
          >
            Full Stack Developer
          </h2>

          <p
            style={{
              color: '#94a3b8',
              lineHeight: 1.9,
              fontSize: '1.1rem',
            }}
          >
            I'm Alan Babu, a passionate Full Stack Developer focused on creating modern web applications, scalable backend systems, and exceptional user experiences. I enjoy transforming ideas into real-world digital solutions using modern technologies and clean development practices.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          {skillCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
              whileHover={{
                y: -10,
                borderColor: 'rgba(56, 189, 248, 0.25)',
                boxShadow: '0 15px 35px rgba(56, 189, 248, 0.1)',
              }}
              className={styles.glassCard}
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(56,189,248,0.08)',
                  color: '#38bdf8',
                  marginBottom: '1.5rem',
                }}
              >
                {card.icon}
              </div>

              <h3
                style={{
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: '#94a3b8',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                {card.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.7rem',
                }}
              >
                {card.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.5rem 0.9rem',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#cbd5e1',
                      fontSize: '0.85rem',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          {[
            { label: 'Projects Completed', value: 10, suffix: '+', color: '#0ea5e9' },
            { label: 'Technologies Mastered', value: 16, suffix: '+', color: '#8b5cf6' },
            { label: 'Client Satisfaction', value: 100, suffix: '%', color: '#ec4899' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '24px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3
                style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: stat.color,
                  marginBottom: '0.5rem',
                  textShadow: `0 0 20px ${stat.color}30`,
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div
            className={styles.glassCard}
            style={{
              padding: '2.5rem',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'rgba(56, 189, 248, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                }}
              >
                <User size={24} />
              </div>
              <h3
                style={{
                  color: '#fff',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                }}
              >
                Quick Information
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { label: 'Role', value: 'Full Stack Developer', icon: <Sparkles size={16} /> },
                { label: 'Location', value: 'Kerala, India', icon: <MapPin size={16} /> },
                { label: 'Availability', value: 'Open for Freelance & Full-Time', icon: <Calendar size={16} /> },
                { label: 'Specialization', value: 'Web Applications, APIs & Business Software', icon: <Code2 size={16} /> },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span
                    style={{
                      color: '#38bdf8',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </span>
                  <p
                    style={{
                      color: '#e2e8f0',
                      fontSize: '1rem',
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}