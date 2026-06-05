'use client';

import { motion } from 'framer-motion';
import { Rocket, Cpu, Sparkles } from 'lucide-react';
import styles from './components.module.css';

const cards = [
  {
    title: 'Defying Gravity',
    subtitle: 'in Code',
    description: 'As a Full Stack Developer, I write applications that push past standard design constraints. My architectures are built lightweight, ensuring fast, frictionless, and seamless user experiences.',
    icon: <Rocket size={32} className="neon-text" style={{ color: 'var(--accent-blue)' }} />,
  },
  {
    title: 'The MERN Stack',
    subtitle: 'Specialized',
    description: 'Whether utilizing high-performance React frontends or structuring secure, scalable Node/Express microservices, I build reliable solutions. MongoDB provides the flexible database core.',
    icon: <Cpu size={32} className="neon-text" style={{ color: 'var(--accent-purple)' }} />,
  },
  {
    title: 'Designing',
    subtitle: 'the Future',
    description: 'My philosophy centers around neat styling, robust performance metrics, and fluid animations. I focus on the micro-details to ensure the final product represents digital craftsmanship.',
    icon: <Sparkles size={32} className="neon-text" style={{ color: 'var(--accent-pink)' }} />,
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section} style={{ padding: '8rem 2rem' }}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className={styles.aboutTitle} style={{ margin: 0, fontSize: 'clamp(2.8rem, 5vw, 4rem)', fontWeight: 800 }}>
            Coding Beyond <span className="neon-text">Gravity</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px', marginInline: 'auto' }}>
            Pushing the boundaries of web experiences with modern full-stack architectures.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            width: '100%',
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={styles.glassCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {card.icon}
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  {card.title} <span className="neon-text" style={{ display: 'block', fontSize: '1.25rem', fontWeight: 500 }}>{card.subtitle}</span>
                </h3>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
