'use client';

import { motion } from 'framer-motion';
import styles from './components.module.css';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Dental Clinic Management System',
    desc: 'A robust clinic platform managing doctor schedules, patient history files, prescriptions, billing logs, and dashboard insights.',
    tech: ['Next.js', 'React', 'MongoDB', 'Node.js'],
    image: '/project-clinic.png',
    github: 'https://github.com/alanbabu',
    demo: '#',
  },
  {
    title: 'Dental Lab Management Software',
    desc: 'Specialized workflow tracking for dental restorations, technicians, orders, inventory levels, and lab shipping states.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    image: '/project-lab.png',
    github: 'https://github.com/alanbabu',
    demo: '#',
  },
  {
    title: 'CRM Management System',
    desc: 'Client relationship tracker designed with interactive pipelines, communication history, meeting alerts, and deal statuses.',
    tech: ['Django', 'Python', 'FastAPI', 'MySQL'],
    image: '/project-crm.png',
    github: 'https://github.com/alanbabu',
    demo: '#',
  },
  {
    title: 'Admin Dashboard System',
    desc: 'A premium SaaS monitoring layout displaying sales statistics, system memory status, user security layers, and data charts.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    image: '/project-dashboard.png',
    github: 'https://github.com/alanbabu',
    demo: '#',
  },
  {
    title: 'Business Website Platform',
    desc: 'A dynamic CMS-driven corporate landing page utility featuring fast loading performance and animated blog structures.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'Sanity'],
    image: '/project-business.png',
    github: 'https://github.com/alanbabu',
    demo: '#',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'An enterprise shopping solution loaded with Stripe transaction support, carts, search filters, and an admin catalog.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/project-ecommerce.png',
    github: 'https://github.com/alanbabu',
    demo: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section} style={{ padding: '8rem 2rem' }}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p
            style={{
              color: '#ec4899',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            My Work
          </p>
          <h2
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            Featured <span className="neon-text-pink">Projects</span>
          </h2>
          <p
            style={{
              color: '#94a3b8',
              maxWidth: '700px',
              margin: '1.2rem auto 0',
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            A collection of production-grade systems, clinic utilities, and web portals built to solve real-world complexities.
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`${styles.projectCard} ${styles.glassCard}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'rgba(2, 6, 23, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(4px)',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Dashboard
                </div>
              </div>
              <div className={styles.projectContent} style={{ padding: '2rem' }}>
                <h3 className={styles.projectTitle} style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem' }}>
                  {project.title}
                </h3>
                <p className={styles.projectDesc} style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  {project.desc}
                </p>
                <div className={styles.projectTags} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={styles.tag}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '999px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        color: '#cbd5e1',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks} style={{ display: 'flex', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.2rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      transition: 'color 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#0ea5e9',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      transition: 'color 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0ea5e9'}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
