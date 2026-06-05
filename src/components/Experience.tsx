'use client';

import { motion } from 'framer-motion';
import styles from './components.module.css';

const experiences = [
  {
    date: '2025 - Present',
    role: 'Full Stack Developer',
    company: 'Freelance & Client Projects',
    desc: 'Building modern websites, business software, dental clinic management systems, and scalable web applications using Next.js, React, Django, and Node.js.',
    color: '#3b82f6',
  },
  {
    date: '2024 - 2025',
    role: 'Frontend Developer',
    company: 'Web Development Projects',
    desc: 'Created responsive interfaces, optimized website performance, and implemented modern UI/UX experiences using React and Framer Motion.',
    color: '#8b5cf6',
  },
  {
    date: '2023 - 2024',
    role: 'Web Developer',
    company: 'Personal & Client Projects',
    desc: 'Developed business websites, landing pages, and custom web solutions while focusing on performance, SEO, and user experience.',
    color: '#ec4899',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className={styles.section}
      style={{
        padding: '120px 20px',
        position: 'relative',
      }}
    >
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1rem',
            }}
          >
            Professional Experience
          </h2>
          <p
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              color: '#94a3b8',
              lineHeight: 1.8,
            }}
          >
            My journey building websites, business software, and modern digital experiences.
          </p>
        </motion.div>

        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Timeline Line */}
          <div
            style={{
              position: 'absolute',
              left: '-30px',
              top: 0,
              width: '3px',
              height: '100%',
              background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899)',
              boxShadow: '0 0 25px rgba(59, 130, 246, .4)',
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              style={{
                position: 'relative',
                padding: '2rem',
                marginBottom: '2rem',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
              }}
            >
              {/* Glowing Dot */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{
                  position: 'absolute',
                  left: '-38px',
                  top: '38px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 25px ${exp.color}`,
                }}
              />

              {/* Left Glow Border */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '4px',
                  height: '100%',
                  background: exp.color,
                  boxShadow: `0 0 20px ${exp.color}`,
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    color: exp.color,
                    fontWeight: 700,
                  }}
                >
                  {exp.date}
                </span>

                <span
                  style={{
                    color: '#94a3b8',
                  }}
                >
                  {exp.company}
                </span>
              </div>

              <h3
                style={{
                  color: '#fff',
                  fontSize: '1.5rem',
                  marginBottom: '.8rem',
                }}
              >
                {exp.role}
              </h3>

              <p
                style={{
                  color: '#cbd5e1',
                  lineHeight: 1.8,
                }}
              >
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
