'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './components.module.css';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!serviceId || !templateId || !publicKey || serviceId.includes('xxxxxxx') || templateId.includes('xxxxxxx') || publicKey.includes('xxxx')) {
      setStatus({
        type: 'error',
        message: 'Please configure your EmailJS Environment Variables in .env.local'
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSending(false);
    }
  };

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
          ref={formRef}
          className={`${styles.contactForm} ${styles.glassCard}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.inputLabel}>Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              className={styles.inputField}
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              className={styles.inputField}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.inputLabel}>Message</label>
            <textarea
              id="message"
              name="message"
              className={`${styles.inputField} ${styles.textareaField}`}
              placeholder="Your message here..."
              required
            />
          </div>

          <motion.button
            type="submit"
            className={styles.primaryButton}
            style={{ width: '100%' }}
            whileHover={{ scale: isSending ? 1 : 1.02 }}
            whileTap={{ scale: isSending ? 1 : 0.98 }}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status.type && (
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                borderRadius: '10px',
                textAlign: 'center',
                fontSize: '0.95rem',
                fontWeight: 500,
                background: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                border: status.type === 'success' ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)',
                color: status.type === 'success' ? '#34d399' : '#f87171'
              }}
            >
              {status.message}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
