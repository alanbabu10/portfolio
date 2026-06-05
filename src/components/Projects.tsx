'use client';

import { motion } from 'framer-motion';
import styles from './components.module.css';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack MERN e-commerce solution with Redux state management, Stripe payment integration, and a comprehensive admin dashboard.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/project-ecommerce.png',
  },
  {
    title: 'Real-Time Chat App',
    desc: 'A real-time messaging application using Socket.io, featuring group chats, read receipts, and online status indicators.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '/project-chat.png',
  },
  {
    title: 'Task Management System',
    desc: 'A Kanban-style task manager with drag-and-drop functionality, user authentication, and team collaboration features.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    image: '/project-task.png',
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="neon-text">Projects</span>
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`${styles.projectCard} ${styles.glassCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.projectImage} style={{ position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.projectTags}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink} aria-label="View Code"><Code size={20} /></a>
                  <a href="#" className={styles.projectLink} aria-label="View Live"><ExternalLink size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
