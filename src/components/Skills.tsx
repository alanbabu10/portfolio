'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Database,
  Server,
  GitBranch,
  Layers,
} from 'lucide-react';

import styles from './components.module.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Globe size={36} />,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },

  {
    title: 'Backend Development',
    icon: <Server size={36} />,
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST API',
      'JWT Authentication',
    ],
  },

  {
    title: 'Database',
    icon: <Database size={36} />,
    skills: [
      'MongoDB',
      'MySQL',
      'Database Design',
      'Data Modeling',
    ],
  },

  {
    title: 'Tools & Workflow',
    icon: <GitBranch size={36} />,
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Vercel',
      'Linux',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            marginBottom: '5rem',
          }}
        >
          <p
            style={{
              color: '#38bdf8',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            My Skills
          </p>

          <h2
            style={{
              fontSize:
                'clamp(2.8rem,6vw,4.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginTop: '1rem',
            }}
          >
            Technologies I Use
          </h2>

          <p
            style={{
              color: '#94a3b8',
              maxWidth: '700px',
              margin: '1rem auto 0',
              lineHeight: 1.8,
            }}
          >
            My expertise spans frontend
            development, backend architecture,
            database management, and modern
            development workflows.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(300px,1fr))',
            gap: '2rem',
          }}
        >
          {skillCategories.map(
            (category, index) => (
              <motion.div
                key={category.title}
                className={styles.glassCard}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
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
                    justifyContent:
                      'center',
                    background:
                      'rgba(56,189,248,0.08)',
                    color: '#38bdf8',
                    marginBottom: '1.5rem',
                  }}
                >
                  {category.icon}
                </div>

                <h3
                  style={{
                    color: '#fff',
                    marginBottom: '1.5rem',
                    fontSize: '1.4rem',
                  }}
                >
                  {category.title}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                  }}
                >
                  {category.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        style={{
                          padding:
                            '0.6rem 1rem',
                          borderRadius:
                            '999px',
                          background:
                            'rgba(255,255,255,0.05)',
                          border:
                            '1px solid rgba(255,255,255,0.08)',
                          color:
                            '#cbd5e1',
                          fontSize:
                            '0.9rem',
                        }}
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Bottom Stats */}

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(200px,1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '2.5rem',
                color: '#38bdf8',
                margin: 0,
              }}
            >
              15+
            </h3>
            <p
              style={{
                color: '#94a3b8',
              }}
            >
              Technologies
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '2.5rem',
                color: '#8b5cf6',
                margin: 0,
              }}
            >
              Full Stack
            </h3>
            <p
              style={{
                color: '#94a3b8',
              }}
            >
              Development
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '2.5rem',
                color: '#ec4899',
                margin: 0,
              }}
            >
              API
            </h3>
            <p
              style={{
                color: '#94a3b8',
              }}
            >
              Development
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}