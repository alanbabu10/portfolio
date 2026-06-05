'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  User,
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

export default function About() {
  return (
    <section
      id="about"
      className={styles.section}
      style={{
        padding: '8rem 2rem',
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
              fontSize:
                'clamp(2.8rem, 6vw, 4.5rem)',
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
            I'm Alan Babu, a passionate Full Stack Developer
            focused on creating modern web applications,
            scalable backend systems, and exceptional user
            experiences. I enjoy transforming ideas into
            real-world digital solutions using modern
            technologies and clean development practices.
          </p>
        </motion.div>

        {/* About Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
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
                y: -8,
              }}
              className={styles.glassCard}
              style={{
                padding: '2rem',
                borderRadius: '24px',
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
                  background:
                    'rgba(56,189,248,0.08)',
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
                      padding:
                        '0.5rem 0.9rem',
                      borderRadius:
                        '999px',
                      background:
                        'rgba(255,255,255,0.05)',
                      border:
                        '1px solid rgba(255,255,255,0.08)',
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

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '5rem',
          }}
        >
          <div
            className={styles.glassCard}
            style={{
              padding: '2rem',
              borderRadius: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              <User
                size={28}
                color="#38bdf8"
              />
              <h3
                style={{
                  color: '#fff',
                  margin: 0,
                }}
              >
                Quick Information
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit,minmax(250px,1fr))',
                gap: '1.5rem',
              }}
            >
              <div>
                <strong
                  style={{
                    color: '#fff',
                  }}
                >
                  Role
                </strong>
                <p
                  style={{
                    color: '#94a3b8',
                  }}
                >
                  Full Stack Developer
                </p>
              </div>

              <div>
                <strong
                  style={{
                    color: '#fff',
                  }}
                >
                  Location
                </strong>
                <p
                  style={{
                    color: '#94a3b8',
                  }}
                >
                  Kerala, India
                </p>
              </div>

              <div>
                <strong
                  style={{
                    color: '#fff',
                  }}
                >
                  Availability
                </strong>
                <p
                  style={{
                    color: '#94a3b8',
                  }}
                >
                  Open for Freelance &
                  Full-Time Opportunities
                </p>
              </div>

              <div>
                <strong
                  style={{
                    color: '#fff',
                  }}
                >
                  Specialization
                </strong>
                <p
                  style={{
                    color: '#94a3b8',
                  }}
                >
                  Web Applications,
                  APIs & Business
                  Software
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}