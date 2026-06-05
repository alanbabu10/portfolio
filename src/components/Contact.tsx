'use client';

import { motion } from 'framer-motion';
import styles from './components.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's <span className="neon-text">Connect</span>
        </motion.h2>

        <motion.form
          className={`${styles.contactForm} ${styles.glassCard}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.inputLabel}>Name</label>
            <input type="text" id="name" className={styles.inputField} placeholder="John Doe" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>Email</label>
            <input type="email" id="email" className={styles.inputField} placeholder="john@example.com" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.inputLabel}>Message</label>
            <textarea id="message" className={`${styles.inputField} ${styles.textareaField}`} placeholder="Your message here..." />
          </div>

          <motion.button
            className={styles.primaryButton}
            style={{ width: '100%' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
