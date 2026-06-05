'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './components.module.css';

export default function PricingDetails() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text 1: 0% to 33%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.33], [0, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.33], [0.8, 1.2]);

  // Text 2: 33% to 66%
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.48, 0.66], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.33, 0.66], [0.8, 1.2]);

  // Text 3 (Pricing): 66% to 100%
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 1, 1]);
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [0.8, 1]);
  const y3 = useTransform(scrollYProgress, [0.66, 1], [50, 0]);

  return (
    <section ref={containerRef} className={styles.scrollSection}>
      <div className={styles.stickyContainer}>
        <motion.div className={styles.scrollTextLayer} style={{ opacity: opacity1, scale: scale1 }}>
          <h2 className={styles.hugeText}>Uncompromising Quality.</h2>
        </motion.div>
        
        <motion.div className={styles.scrollTextLayer} style={{ opacity: opacity2, scale: scale2 }}>
          <h2 className={styles.hugeText}>Built for Performance.</h2>
        </motion.div>

        <motion.div className={styles.scrollTextLayer} style={{ opacity: opacity3, scale: scale3, y: y3 }}>
          <h2 className={styles.hugeText}>Custom Web Apps.</h2>
          <p className={styles.pricingText}>Starting at $2,000.</p>
        </motion.div>
      </div>
    </section>
  );
}
