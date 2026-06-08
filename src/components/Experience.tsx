'use client';

import { motion } from 'framer-motion';
import styles from './components.module.css';

const experiences = [
{
date: '2026 - Present',
role: 'Junior Full Stack Developer',
company: 'MarketBytes',
desc: 'Working as a Junior Full Stack Developer, building scalable web applications, REST APIs, admin dashboards, business software, and modern user interfaces using Next.js, React, Django, FastAPI, Node.js, MongoDB, and MySQL.',
color: '#0ea5e9',
},
{
date: '2026',
role: 'Frontend Developer',
company: 'DotWibe',
desc: 'Completed a 2-month Frontend Developer role focused on creating responsive and interactive web applications using Next.js, React.js, TypeScript, Tailwind CSS, and modern UI/UX development practices.',
color: '#8b5cf6',
},
{
date: '2025',
role: 'MERN Stack Developer Intern',
company: 'Softern Technologies',
desc: 'Completed a 5-month MERN Stack Development Internship, working with MongoDB, Express.js, React.js, and Node.js. Developed full-stack applications, authentication systems, REST APIs, and responsive web interfaces.',
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
> <div className={styles.container}>
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
<p
style={{
color: '#38bdf8',
textTransform: 'uppercase',
letterSpacing: '3px',
fontWeight: 600,
marginBottom: '1rem',
}}
>
Career Journey </p>


      <h2
        style={{
          fontSize: 'clamp(2.8rem, 5vw, 4rem)',
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
        My professional journey from MERN Stack Intern to Junior Full Stack Developer, building modern web applications and business software solutions.
      </p>
    </motion.div>

    <div
      style={{
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
        paddingLeft: '50px',
      }}
    >
      {/* Timeline Line */}
      <div
        style={{
          position: 'absolute',
          left: '18px',
          top: 0,
          width: '3px',
          height: '100%',
          background:
            'linear-gradient(to bottom, #0ea5e9, #8b5cf6, #ec4899)',
          boxShadow:
            '0 0 25px rgba(14,165,233,.4)',
        }}
      />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
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
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border:
              '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Timeline Dot */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              position: 'absolute',
              left: '-41px',
              top: '38px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: exp.color,
              boxShadow: `0 0 25px ${exp.color}`,
            }}
          />

          {/* Left Border */}
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
