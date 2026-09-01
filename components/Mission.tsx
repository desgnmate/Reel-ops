'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/lib/animations';
import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section className={styles.mission}>
      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.h2 className={styles.title} variants={fadeInUp}>
          OUR
          <br />
          MISSION
        </motion.h2>

        <motion.h2 className={styles.title} variants={fadeInUp}>
          YOUR
          <br />
          <span className={styles.accent}>SUCCESS</span>
        </motion.h2>
      </motion.div>
    </section>
  );
}
