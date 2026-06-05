'use client';

import { motion } from 'framer-motion';
import { Code2, FileCode2, Database, Server, Layout, GitBranch } from 'lucide-react';
import styles from './components.module.css';

const skills = [
  { name: 'JavaScript / ES6+', icon: <FileCode2 size={40} strokeWidth={1.5} /> },
  { name: 'TypeScript', icon: <Code2 size={40} strokeWidth={1.5} /> },
  { name: 'React & Next.js', icon: <Layout size={40} strokeWidth={1.5} /> },
  { name: 'Node.js & Express', icon: <Server size={40} strokeWidth={1.5} /> },
  { name: 'MongoDB', icon: <Database size={40} strokeWidth={1.5} /> },
  { name: 'Git & Workflow', icon: <GitBranch size={40} strokeWidth={1.5} /> }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="neon-text">Arsenal</span>
        </motion.h2>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`${styles.skillCard} ${styles.glassCard}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
